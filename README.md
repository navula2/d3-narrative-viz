# World Bank Data Indicators Narrative Visualization
## About the Visualization
This visualization follows the Interactive Slideshow Visualization Structure. Visualization webpage is hosted on githubpages and is accessible using the URl: https://navula2.github.io/d3-narrative-viz/

## Dataset
World Bank Indicators dataset http://databank.worldbank.org/data/download/WDI_csv.zip is used for this Narrative Data Visualization. To supplement the US population by state, I have also used "US State populations - 2018" dataset from Kaggle https://www.kaggle.com/lucasvictor/us-state-populations-2018#State%20Populations.csv

The following data is used for plotting Map, Scatterplot, Barchart and Linegraph
- US Population by State for as of year 2018
- Life Expectancy at Birth vs Total Population for all the countires in the world
- US Average Unemployment percentage from years 2000 to 2018
- World Population Growth Over the years from 2000 to 2018

## Technology stack
* D3 Java script, bootstrap js, HTML, CSS
* Fullpage sideshow template
* Data - CSV and JSON format
* Website hosted on githubpages

## Scenes
There are 4 Scenes in the slideshow. 
 - Choropleth
 - Scatterplot
 - Barchart
 - Linegraph

All the scenes follows the same template, colors, fonts, background theme for the visual consistency throughout the Visualization to best convey the message.

## Annotations
Annotations are added to each scene with help of a tooltip. Mouse over and Mouse out events will show/hide tooltip annotations interactively.
- **Map annotations**: Hover the mouse on any of the state on the US Map shows a tooltip with State name and population. When the mouse moved to next state it shows data for that state and so on. When the mouse out from the state, the annotation disappears.
- **Scatterplot annotations**: Hover the mouse on any of the cirle shows a tooltio with Country name and Avergage Life expectancy in years.
- **Barchart annotations**: Hover the mouse on any of the rectangular bar shows the tooltip with Unemployment percentage corresponding to the year.
- **Linegraph annotations**: Hover the mouse on the line shows the Total population for the given year.

## Parameters
- **Slide Navigators**: The slide navigation dots are shown in the right side of each slide.
- **Map parameters**: Population of each state in US for the year 2018.
- **Scatterplot parameters**: Life Expectancy at birth in years for the Total popuation of each country.
- **Barchart parameters**: Avg. Unemployment percentage for the given year.
- **Linegraph parameters**: Total population for given year.

## Triggers
- **Slide Navigation controls**: The Visualization Navigation can be controlled by Keyboard arrow keys, Mouse scroll wheel, and by pressing the "Dot button" in the right side of the fullpage template.
- **Map triggers**: Mouse over event on any state on US map triggers tooltip show action and mouse out event triggers hide action on tooltip.
- **Scatterplot triggers**: Mouse over event on Income Group filter triggers the action to show the cirles of the matched data. Mouse over/Mouseout events triggers the action of show/hide tooltip on each circle respectively.
- **Barchart triggers**: Mouse over event on any bar will trigger the action of Highlight the bar in yellow color and  Unemployment percentage tooltip will be shown.
- **Linegraph triggers**: Hover over the mouse over the line chart from left to right and vice versa and observe the population Growth over the years 2000 to 2018.

## Filters
Scatterplot support filtering of counties by Income Group. Hover the mouse on a given Income group filters the Life Expectancy data for the countires whose Income Group matched with the selected Income Group.

## Sort
On barchart, clicking on "Sort" button sorts the US Unemployment data in ascending/descending order. Refresh the page to restore the barchart to default position.

## Conclusion
* US East coast states are more populated than Midwest/West coast.
* US Unemployment data from 2000-2018 shows that Unemployment was hitted high 2010 and recovered pretty good in 2017 and 2018.
* Average Life Expectancy is high in countries in "High Income" group compared to the Low incone countires.
* World population is growing steadily each year.

## References and Credits
* D3 Javascript Library (https://d3js.org/)
* D3 js playground (https://bl.ocks.org/)
* Bootstrap js (https://getbootstrap.com/)
* fullpage slideshow template (https://github.com/alvarotrigo/fullpage.js)
* World Bank Indicators Home page Image (http://datatopics.worldbank.org/world-development-indicators/)
* WDI dataset (http://databank.worldbank.org/data/download/WDI_csv.zip)
* Github (https://github.com/)
* Github pages (https://pages.github.com/)
