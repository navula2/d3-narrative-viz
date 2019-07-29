// WDI data Avg Life Expectancy at Birth vs Total Population in JSON format
var countries = [
    {
      "Region": "East Asia & Pacific",
      "CountryName": "American Samoa",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 42908,
      "LifeExpectancy": ""
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Australia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 16963628,
      "LifeExpectancy": 76
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Brunei Darussalam",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 254812,
      "LifeExpectancy": 72
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Cambodia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 9922151,
      "LifeExpectancy": 50
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "China",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1082618051,
      "LifeExpectancy": 66
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Fiji",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 694301,
      "LifeExpectancy": 64
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "French Polynesia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 188659,
      "LifeExpectancy": 68
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Guam",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 123545,
      "LifeExpectancy": 71
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Hong Kong SAR, China",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 5556488,
      "LifeExpectancy": 77
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Indonesia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 176461774,
      "LifeExpectancy": 61
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Japan",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 118006864,
      "LifeExpectancy": 78
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Kiribati",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 73332,
      "LifeExpectancy": 60
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Korea, Dem. People’s Rep.",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 19525266,
      "LifeExpectancy": 65
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Korea, Rep.",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 41074397,
      "LifeExpectancy": 70
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Lao PDR",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 4319125,
      "LifeExpectancy": 54
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Macao SAR, China",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 357797,
      "LifeExpectancy": 76
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Malaysia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 18572716,
      "LifeExpectancy": 69
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Marshall Islands",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 39865,
      "LifeExpectancy": 68
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Micronesia, Fed. Sts.",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 85978,
      "LifeExpectancy": 65
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Mongolia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 2019515,
      "LifeExpectancy": 60
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Myanmar",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 39200101,
      "LifeExpectancy": 57
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Nauru",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 8785,
      "LifeExpectancy": ""
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "New Caledonia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 175356,
      "LifeExpectancy": 70
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "New Zealand",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3501049,
      "LifeExpectancy": 76
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Northern Mariana Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 35357,
      "LifeExpectancy": ""
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Palau",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 15062,
      "LifeExpectancy": 70
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Papua New Guinea",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 4809242,
      "LifeExpectancy": 57
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Philippines",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 62664893,
      "LifeExpectancy": 64
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Samoa",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 161817,
      "LifeExpectancy": 64
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Singapore",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3314596,
      "LifeExpectancy": 75
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Solomon Islands",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 329030,
      "LifeExpectancy": 60
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Thailand",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 52663695,
      "LifeExpectancy": 67
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Timor-Leste",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 786057,
      "LifeExpectancy": 49
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Tonga",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 92137,
      "LifeExpectancy": 69
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Tuvalu",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 8287,
      "LifeExpectancy": ""
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Vanuatu",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 154269,
      "LifeExpectancy": 61
    },
    {
      "Region": "East Asia & Pacific",
      "CountryName": "Vietnam",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 65401979,
      "LifeExpectancy": 69
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Albania",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 2705824,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Andorra",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 51114,
      "LifeExpectancy": ""
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Armenia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 2911608,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Austria",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 7827490,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Azerbaijan",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 7005570,
      "LifeExpectancy": 66
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Belarus",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 9532889,
      "LifeExpectancy": 70
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Belgium",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 10122532,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Bosnia and Herzegovina",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 3848893,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Bulgaria",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 8208771,
      "LifeExpectancy": 72
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Channel Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 138518,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Croatia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 4437004,
      "LifeExpectancy": 72
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Cyprus",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 820804,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Czech Republic",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 10199384,
      "LifeExpectancy": 73
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Denmark",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 5193451,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Estonia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 1396603,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Faroe Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 44044,
      "LifeExpectancy": 79
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Finland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 4976009,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "France",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 57850210,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Georgia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 4188744,
      "LifeExpectancy": 70
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Germany",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 79491252,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Gibraltar",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 30029,
      "LifeExpectancy": ""
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Greece",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 9974454,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Greenland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 51390,
      "LifeExpectancy": 67
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Hungary",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 10274822,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Iceland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 255586,
      "LifeExpectancy": 78
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Ireland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3647864,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Isle of Man",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 68349,
      "LifeExpectancy": 77
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Italy",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 56349974,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Kazakhstan",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 14855989,
      "LifeExpectancy": 66
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Kosovo",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1591965,
      "LifeExpectancy": 69
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Kyrgyz Republic",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 4192558,
      "LifeExpectancy": 65
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Latvia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 2344988,
      "LifeExpectancy": 70
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Liechtenstein",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 28407,
      "LifeExpectancy": 80
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Lithuania",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3284933,
      "LifeExpectancy": 71
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Luxembourg",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 410306,
      "LifeExpectancy": 75
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Moldova",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 3395837,
      "LifeExpectancy": 67
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Monaco",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 29531,
      "LifeExpectancy": ""
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Montenegro",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 581352,
      "LifeExpectancy": 73
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Netherlands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 14768769,
      "LifeExpectancy": 77
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "North Macedonia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1912216,
      "LifeExpectancy": 70
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Norway",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 4311055,
      "LifeExpectancy": 77
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Poland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 36079637,
      "LifeExpectancy": 72
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Portugal",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 9800253,
      "LifeExpectancy": 73
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Romania",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 21184923,
      "LifeExpectancy": 70
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Russian Federation",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 139739027,
      "LifeExpectancy": 68
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "San Marino",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 24437,
      "LifeExpectancy": 85
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Serbia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 7405199,
      "LifeExpectancy": 74
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Slovak Republic",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 5050328,
      "LifeExpectancy": 72
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Slovenia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 1904776,
      "LifeExpectancy": 73
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Spain",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 39090083,
      "LifeExpectancy": 77
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Sweden",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 8613227,
      "LifeExpectancy": 78
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Switzerland",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 6830225,
      "LifeExpectancy": 77
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Tajikistan",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 5121439,
      "LifeExpectancy": 64
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Turkey",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 53060629,
      "LifeExpectancy": 63
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Turkmenistan",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 3620463,
      "LifeExpectancy": 62
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Ukraine",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 48090052,
      "LifeExpectancy": 69
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "United Kingdom",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 58178214,
      "LifeExpectancy": 76
    },
    {
      "Region": "Europe & Central Asia",
      "CountryName": "Uzbekistan",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 19989732,
      "LifeExpectancy": 66
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Antigua and Barbuda",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 70488,
      "LifeExpectancy": 70
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Argentina",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 32087002,
      "LifeExpectancy": 71
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Aruba",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 75759,
      "LifeExpectancy": 72
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Bahamas, The",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 252352,
      "LifeExpectancy": 70
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Barbados",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 259962,
      "LifeExpectancy": 70
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Belize",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 204576,
      "LifeExpectancy": 68
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Bolivia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 7022452,
      "LifeExpectancy": 55
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Brazil",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 144081948,
      "LifeExpectancy": 65
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "British Virgin Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 17190,
      "LifeExpectancy": ""
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Cayman Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 29716,
      "LifeExpectancy": 82
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Chile",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 13220829,
      "LifeExpectancy": 71
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Colombia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 32677904,
      "LifeExpectancy": 67
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Costa Rica",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 3120950,
      "LifeExpectancy": 73
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Cuba",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 10092987,
      "LifeExpectancy": 74
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Curacao",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 144684,
      "LifeExpectancy": 77
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Dominica",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 70452,
      "LifeExpectancy": 74
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Dominican Republic",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 6987934,
      "LifeExpectancy": 66
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Ecuador",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 10257310,
      "LifeExpectancy": 67
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "El Salvador",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 4990383,
      "LifeExpectancy": 63
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Grenada",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 98941,
      "LifeExpectancy": 68
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Guatemala",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 9647708,
      "LifeExpectancy": 61
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Guyana",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 735110,
      "LifeExpectancy": 64
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Haiti",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 7093115,
      "LifeExpectancy": 54
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Honduras",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 5211764,
      "LifeExpectancy": 63
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Jamaica",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 2354535,
      "LifeExpectancy": 71
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Mexico",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 81702322,
      "LifeExpectancy": 69
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Nicaragua",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 4072729,
      "LifeExpectancy": 63
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Panama",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 2500161,
      "LifeExpectancy": 71
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Paraguay",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 4233205,
      "LifeExpectancy": 68
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Peru",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 21257251,
      "LifeExpectancy": 64
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Puerto Rico",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3303105,
      "LifeExpectancy": 75
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Sint Maarten (Dutch part)",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 34433,
      "LifeExpectancy": 74
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "St. Kitts and Nevis",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 45615,
      "LifeExpectancy": 68
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "St. Lucia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 135835,
      "LifeExpectancy": 69
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "St. Martin (French part)",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 20540,
      "LifeExpectancy": 77
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "St. Vincent and the Grenadines",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 101507,
      "LifeExpectancy": 68
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Suriname",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 422223,
      "LifeExpectancy": 66
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Trinidad and Tobago",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 1157256,
      "LifeExpectancy": 67
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Turks and Caicos Islands",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 16341,
      "LifeExpectancy": ""
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Uruguay",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 3070945,
      "LifeExpectancy": 72
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Venezuela, RB",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 19332284,
      "LifeExpectancy": 69
    },
    {
      "Region": "Latin America & Caribbean",
      "CountryName": "Virgin Islands (U.S.)",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 91994,
      "LifeExpectancy": 74
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Algeria",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 25004481,
      "LifeExpectancy": 63
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Bahrain",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 601931,
      "LifeExpectancy": 70
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Djibouti",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 508974,
      "LifeExpectancy": 55
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Egypt, Arab Rep.",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 56817207,
      "LifeExpectancy": 62
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Iran, Islamic Rep.",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 51492053,
      "LifeExpectancy": 62
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Iraq",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 19049742,
      "LifeExpectancy": 63
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Israel",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 5057463,
      "LifeExpectancy": 77
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Jordan",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 4102679,
      "LifeExpectancy": 67
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Kuwait",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 1797559,
      "LifeExpectancy": 70
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Lebanon",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 3478299,
      "LifeExpectancy": 71
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Libya",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 4153255,
      "LifeExpectancy": 64
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Malta",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 360985,
      "LifeExpectancy": 76
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Morocco",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 24018856,
      "LifeExpectancy": 63
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Oman",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 1891677,
      "LifeExpectancy": 64
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Qatar",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 712534,
      "LifeExpectancy": 73
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Saudi Arabia",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 15996598,
      "LifeExpectancy": 65
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Syrian Arab Republic",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 12364460,
      "LifeExpectancy": 67
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Tunisia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 7867802,
      "LifeExpectancy": 64
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "United Arab Emirates",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 2975819,
      "LifeExpectancy": 69
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "West Bank and Gaza",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 3264944,
      "LifeExpectancy": 71
    },
    {
      "Region": "Middle East & North Africa",
      "CountryName": "Yemen, Rep.",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 13480011,
      "LifeExpectancy": 53
    },
    {
      "Region": "North America",
      "CountryName": "Bermuda",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 57913,
      "LifeExpectancy": 78
    },
    {
      "Region": "North America",
      "CountryName": "Canada",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 27348243,
      "LifeExpectancy": 77
    },
    {
      "Region": "North America",
      "CountryName": "United States",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 252530272,
      "LifeExpectancy": 75
    },
    {
      "Region": "South Asia",
      "CountryName": "Afghanistan",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 18028707,
      "LifeExpectancy": 48
    },
    {
      "Region": "South Asia",
      "CountryName": "Bangladesh",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 102619011,
      "LifeExpectancy": 58
    },
    {
      "Region": "South Asia",
      "CountryName": "Bhutan",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 489683,
      "LifeExpectancy": 52
    },
    {
      "Region": "South Asia",
      "CountryName": "India",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 872352293,
      "LifeExpectancy": 57
    },
    {
      "Region": "South Asia",
      "CountryName": "Maldives",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 234062,
      "LifeExpectancy": 60
    },
    {
      "Region": "South Asia",
      "CountryName": "Nepal",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 19015517,
      "LifeExpectancy": 53
    },
    {
      "Region": "South Asia",
      "CountryName": "Pakistan",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 112692465,
      "LifeExpectancy": 59
    },
    {
      "Region": "South Asia",
      "CountryName": "Sri Lanka",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 16446676,
      "LifeExpectancy": 69
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Angola",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 13518108,
      "LifeExpectancy": 45
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Benin",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 5605438,
      "LifeExpectancy": 51
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Botswana",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1268584,
      "LifeExpectancy": 57
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Burkina Faso",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 9842117,
      "LifeExpectancy": 48
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Burundi",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 5694381,
      "LifeExpectancy": 49
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Cabo Verde",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 358465,
      "LifeExpectancy": 63
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Cameroon",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 12629258,
      "LifeExpectancy": 51
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Central African Republic",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 2931986,
      "LifeExpectancy": 46
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Chad",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 7046751,
      "LifeExpectancy": 46
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Comoros",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 436615,
      "LifeExpectancy": 54
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Congo, Dem. Rep.",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 39157954,
      "LifeExpectancy": 49
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Congo, Rep.",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 2584070,
      "LifeExpectancy": 55
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Cote d'Ivoire",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 12345538,
      "LifeExpectancy": 48
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Equatorial Guinea",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 529477,
      "LifeExpectancy": 47
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Eritrea",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 1963891,
      "LifeExpectancy": 51
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Eswatini",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 761038,
      "LifeExpectancy": 52
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Ethiopia",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 53701129,
      "LifeExpectancy": 49
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Gabon",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1041161,
      "LifeExpectancy": 56
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Gambia, The",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 1043950,
      "LifeExpectancy": 49
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Ghana",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 15759058,
      "LifeExpectancy": 55
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Guinea",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 6784685,
      "LifeExpectancy": 47
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Guinea-Bissau",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 1050955,
      "LifeExpectancy": 48
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Kenya",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 25099756,
      "LifeExpectancy": 56
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Lesotho",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 1576079,
      "LifeExpectancy": 52
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Liberia",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 2412151,
      "LifeExpectancy": 48
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Madagascar",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 12859676,
      "LifeExpectancy": 53
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Malawi",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 9152802,
      "LifeExpectancy": 47
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Mali",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 9684603,
      "LifeExpectancy": 43
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Mauritania",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 2182356,
      "LifeExpectancy": 56
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Mauritius",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1035967,
      "LifeExpectancy": 68
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Mozambique",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 15196053,
      "LifeExpectancy": 45
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Namibia",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 1428015,
      "LifeExpectancy": 57
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Niger",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 9506883,
      "LifeExpectancy": 45
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Nigeria",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 101528890,
      "LifeExpectancy": 45
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Rwanda",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 6633860,
      "LifeExpectancy": 48
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Sao Tome and Principe",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 121656,
      "LifeExpectancy": 61
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Senegal",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 8008710,
      "LifeExpectancy": 53
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Seychelles",
      "IncomeGroup": "High income",
      "AvgPopulationTotal": 69906,
      "LifeExpectancy": 71
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Sierra Leone",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 4312899,
      "LifeExpectancy": 40
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Somalia",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 7454399,
      "LifeExpectancy": 47
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "South Africa",
      "IncomeGroup": "Upper middle income",
      "AvgPopulationTotal": 36246623,
      "LifeExpectancy": 57
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "South Sudan",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 5829664,
      "LifeExpectancy": 44
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Sudan",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 21355997,
      "LifeExpectancy": 56
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Tanzania",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 27254374,
      "LifeExpectancy": 52
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Togo",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 3988272,
      "LifeExpectancy": 52
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Uganda",
      "IncomeGroup": "Low income",
      "AvgPopulationTotal": 19313553,
      "LifeExpectancy": 50
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Zambia",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 8458260,
      "LifeExpectancy": 50
    },
    {
      "Region": "Sub-Saharan Africa",
      "CountryName": "Zimbabwe",
      "IncomeGroup": "Lower middle income",
      "AvgPopulationTotal": 9313291,
      "LifeExpectancy": 54
    }
  ];