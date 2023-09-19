# Belly-button-challenge
Student:  Ryan Himes
Instructor:  Steven Greene
09 September 2023

## Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Contributing](#contributing)
- [Summary](#summary)

## About
In this challenge, I crafted an interactive dashboard to delve into the Belly Button Biodiversity dataset that chronicles the microbial species inhabiting human navels. Using VS Code, I designed an HTML document and integrated JavaScript with the help of the D3 library to parse JSON data, resulting in a dashboard that presents dynamic data visualizations using Plotly.

## Getting Started
JavaScript's D3 library was used to parse JSON data, creating data visualizations using Plotly. Then running the HTML file to display the interactive dashboard. Upon loading the webpage, the dashboard is initialized, fetching data and presenting visualizations corresponding to the first sample. Users can select different samples from the dropdown menu to explore various data points interactively.
## Contributing
- <a href="https://www.github.com/agostinger/" target="_blank">Adam Gostinger</a>
- <a href="https://www.github.com/zonaj2/" target="_blank">Juliet Hamilton</a>


## Summary
The code provides an interactive data visualization dashboard to represent data fetched from a JSON source. The main features and their descriptions are as follows:

Data Retrieval:
The data is fetched from https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json using the d3.json method.

PlotData Function:
This function is responsible for visualizing the data. It extracts relevant information from the fetched JSON data.

Bar Chart: A horizontal bar chart is plotted using the Plotly.newPlot method, showcasing the top 10 sample values in reverse order. The OTU IDs serve as the y-axis labels.

Bubble Chart: A bubble chart is constructed to show the relationship between OTU IDs (x-axis) and sample values (y-axis). The size and color of the bubbles are determined by sample values and OTU IDs, respectively.
Metadata Display: Metadata associated with each sample is fetched and displayed on the webpage.

Gauge Chart: This chart depicts the Belly Button Washing Frequency, represented as scrubs per week. The data is showcased using a gauge chart, with various color segments indicating different frequency ranges.

Initialize Function:
This function initializes the dashboard on loading.
The function populates a dropdown menu with sample names from the fetched data.
By default, data for the first sample is visualized when the dashboard loads.

Dropdown Interaction:
The optionChanged function is an event handler for the dropdown menu. When a user selects a different sample, the visualizations are updated to reflect the data of the chosen sample.
