// Java script for Scatterplot
var mobileScreen = ($(window).innerWidth() < 500 ? true : false);

//margins
var margin = { left: 60, top: 20, right: 20, bottom: 60 },
	width = Math.min($("#chart").width(), 840) - margin.left - margin.right,
	height = width * 2 / 3;

var svg = d3.select("#chart").append("svg")
	.attr("width", (width + margin.left + margin.right))
	.attr("height", (height + margin.top + margin.bottom));

var wrapper = svg.append("g").attr("class", "chordWrapper")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var opacityCircles = 0.7,
	maxDistanceFromPoint = 50;

//Set the color for each region
var color = d3.scale.ordinal()
	.range(["#EFB605", "#E01A25", "#66489F", "#7EB852"])
	.domain(["High income", "Upper middle income", "Lower middle income", "Low income"]);

//Set the new x axis range
var xScale = d3.scale.log().base(10)
	.range([0, width])
	.domain([10000, 1000000000])
	//.domain(d3.extent(countries, function(d) { return d.AvgPopulationTotal; }))
	.nice();
//Set new x-axis
var xAxis = d3.svg.axis()
	.orient("bottom")
	.ticks(10)
	.tickFormat(d3.format("0.1s"))
	.scale(xScale);
//Append the x-axis
wrapper.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(" + 0 + "," + height + ")")
	.call(xAxis);

//Set the new y axis range
var yScale = d3.scale.linear()
	.range([height, 0])
	//.domain(d3.extent(countries, function(d) { return d.LifeExpectancy; }))
	.domain([30, 90])
	.nice();
var yAxis = d3.svg.axis()
	.orient("left")
	.ticks(10)  //Set rough # of ticks
	.scale(yScale);
//Append the y-axis
wrapper.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate(" + 0 + "," + 0 + ")")
	.call(yAxis);

//Scale for the bubble size
var rScale = d3.scale.sqrt()
	.range([mobileScreen ? 1 : 2, mobileScreen ? 10 : 16])
	.domain(d3.extent(countries, function (d) { return d.LifeExpectancy; }));

//Set up X axis label
wrapper.append("g")
	.append("text")
	.attr("class", "x title")
	.attr("text-anchor", "end")
	.style("font-size", (mobileScreen ? 8 : 12) + "px")
	.attr("transform", "translate(" + width + "," + (height - 10) + ") ")
	.style("fill", "white")
	.text("Avg. Population Total");

//Set up y axis label
wrapper.append("g")
	.append("text")
	.attr("class", "y title")
	.attr("text-anchor", "end")
	.style("font-size", (mobileScreen ? 8 : 12) + "px")
	.attr("transform", "translate(18, 0) rotate(-90)")
	.style("fill", "white")
	.text("Avg. Life Expectancy");

//Initiate the voronoi function
var voronoi = d3.geom.voronoi()
	.x(function (d) { return xScale(d).AvgPopulationTotal; })
	.y(function (d) { return yScale(d).LifeExpectancy; })
	.clipExtent([[0, 0], [width, height]]);

var voronoiCells = voronoi(countries);

//Create wrapper for the voronoi clip paths
var clipWrapper = wrapper.append("defs")
	.attr("class", "clipWrapper");

clipWrapper.selectAll(".clip")
	.data(voronoiCells)
	.enter().append("clipPath")
	.attr("class", "clip")
	.attr("id", function (d) { return "clip-" + d.IncomeGroup; })
	.append("path")
	.attr("class", "clip-path-circle")
	.attr("d", function (d) { return "M" + d.join(",") + "Z"; });

//Initiate a group element for the circles	
var circleClipGroup = wrapper.append("g")
	.attr("class", "circleClipWrapper");

//Place the larger circles to eventually capture the mouse
var circlesOuter = circleClipGroup.selectAll(".circle-wrapper")
	.data(countries.sort(function (a, b) { return b.LifeExpectancy > a.LifeExpectancy; }))
	.enter().append("circle")
	.attr("class", function (d, i) { return "circle-wrapper " + d.IncomeGroup; })
	.attr("clip-path", function (d) { return "url(#clip-" + d.IncomeGroup + ")"; })
	.style("clip-path", function (d) { return "url(#clip-" + d.IncomeGroup + ")"; })
	.attr("cx", function (d) { return xScale(d.AvgPopulationTotal); })
	.attr("cy", function (d) { return yScale(d.LifeExpectancy); })
	.attr("r", maxDistanceFromPoint)
	.on("mouseover", showTooltip)
	.on("mouseout", removeTooltip);

//Initiate a group element for the circles	
var circleGroup = wrapper.append("g")
	.attr("class", "circleWrapper");

//Place the country circles
circleGroup.selectAll("countries")
	.data(countries.sort(function (a, b) { return b.LifeExpectancy > a.LifeExpectancy; })) //Sort so the biggest circles are below
	.enter().append("circle")
	.attr("class", function (d, i) { return "countries " + d.IncomeGroup; })
	.attr("cx", function (d) { return xScale(d.AvgPopulationTotal); })
	.attr("cy", function (d) { return yScale(d.LifeExpectancy); })
	.attr("r", function (d) { return rScale(d.LifeExpectancy); })
	.style("opacity", opacityCircles)
	.style("fill", function (d) { return color(d.IncomeGroup); });

if (!mobileScreen) {
	//Legend			
	var legendMargin = { left: 5, top: 10, right: 5, bottom: 10 },
		legendWidth = 150,
		legendHeight = 270;

	var svgLegend = d3.select("#legend").append("svg")
		.attr("width", (legendWidth + legendMargin.left + legendMargin.right))
		.attr("height", (legendHeight + legendMargin.top + legendMargin.bottom));

	var legendWrapper = svgLegend.append("g").attr("class", "legendWrapper")
		.attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")");

	var rectSize = 15, 
		rowHeight = 20, 
		maxWidth = 150; 

	//Create container per rect/text pair  
	var legend = legendWrapper.selectAll('.legendSquare')
		.data(color.range())
		.enter().append('g')
		.attr('class', 'legendSquare')
		.attr("transform", function (d, i) { return "translate(" + 0 + "," + (i * rowHeight) + ")"; })
		.style("cursor", "pointer")
		.on("mouseover", selectLegend(0.02))
		.on("mouseout", selectLegend(opacityCircles));

	//Non visible white rectangle behind square and text for better hover
	legend.append('rect')
		.attr('width', maxWidth)
		.attr('height', rowHeight)
		.style('fill', "Black");
	//Append small squares to Legend
	legend.append('rect')
		.attr('width', rectSize)
		.attr('height', rectSize)
		.style('fill', function (d) { return d; });
	//Append text to Legend
	legend.append('text')
		.attr('transform', 'translate(' + 22 + ',' + (rectSize / 2) + ')')
		.attr("class", "legendText")
		.style("font-size", "12px")
		.attr("dy", ".35em")
		.style('fill', "white")
		.text(function (d, i) { return color.domain()[i]; });

	//Create g element for bubble size legend
	var bubbleSizeLegend = legendWrapper.append("g")
		.attr("transform", "translate(" + (legendWidth / 2 - 30) + "," + (color.domain().length * rowHeight + 20) + ")");
}//if !mobileScreen
else {
	d3.select("#legend").style("display", "none");
}

//Decrease opacity of non selected circles when hovering in the legend	
function selectLegend(opacity) {
	return function (d, i) {
		var chosen = color.domain()[i];

		wrapper.selectAll(".countries")
			.filter(function (d) { return d.IncomeGroup != chosen; })
			.transition()
			.style("opacity", opacity);
	};
}

//Hide the tooltip when the mouse moves away
function removeTooltip(d, i) {

	//Save the chosen circle (so not the voronoi)
	//var element = d3.selectAll(".countries.CountryName"); //+d.IncomeGroup);
	var element = d3.selectAll(this);
	//Fade out the bubble again
	element.style("opacity", opacityCircles);

	//Hide tooltip
	$('.popover').each(function () {
		$(this).remove();
	});

	//Fade out guide lines, then remove them
	d3.selectAll(".guide")
		.transition().duration(200)
		.style("opacity", 0)
		.remove();

}

//Show the tooltip on the hovered over slice
function showTooltip(d, i) {
	var element = d3.selectAll(this);
	//Save the chosen circle
	//Define and show the tooltip
	$(element).popover({
		placement: 'auto top',
		container: '#chart',
		trigger: 'manual',
		html: true,
		content: function () {
			return "<span style='font-size: 14px; text-align: center; font-weight: bold;'>" + d.CountryName + ": " + "</span>" + d.LifeExpectancy;
		}
	});
	$(element).popover('show');

	//Make chosen circle more visible
	element.style("opacity", 1);

	//Place and show tooltip
	var x = +element.attr("cx"),
		y = +element.attr("cy"),
		color = element.style("fill");
	//vertical line
	wrapper
		.append("line")
		.attr("class", "guide")
		.attr("x1", x)
		.attr("x2", x)
		.attr("y1", y)
		.attr("y2", height + 20)
		.style("stroke", color)
		.style("opacity", 0)
		.transition().duration(200)
		.style("opacity", 0.5);
	//Value on the axis
	wrapper
		.append("text")
		.attr("class", "guide")
		.attr("x", x)
		.attr("y", height + 38)
		.style("fill", color)
		.style("opacity", 0)
		.style("text-anchor", "middle")
		.text(d3.format(".2s")(d.AvgPopulationTotal))
		.transition().duration(200)
		.style("opacity", 0.5);

	//horizontal line
	wrapper
		.append("line")
		.attr("class", "guide")
		.attr("x1", x)
		.attr("x2", -25)
		.attr("y1", y)
		.attr("y2", y)
		.style("stroke", color)
		.style("opacity", 0)
		.transition().duration(200)
		.style("opacity", 0.5);
	//Value on the axis
	wrapper
		.append("text")
		.attr("class", "guide")
		.attr("x", -25)
		.attr("y", y)
		.attr("dy", "0.35em")
		.style("fill", color)
		.style("opacity", 0)
		.style("text-anchor", "middle")
		.text(d3.format(".1f")(d.LifeExpectancy))
		.transition().duration(200)
		.style("opacity", 0.5);
}