// Function to plot data visualizations
function plotData(sample) {
    // Fetch JSON data from the URL
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {

        console.log(data);  // Log fetched data

        let samples = data.samples;  // Extract the 'samples' object from the data

        // Filter the samples to match the sample id and log the result
        let result = samples.filter(sampleObj => sampleObj.id == sample)[0];
        console.log(result);

        // Create Bar chart data
        let barData = [{
            x: result.sample_values.slice(0, 10).reverse(),
            y: result.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: result.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        // Plot Bar chart using Plotly
        Plotly.newPlot("bar", barData);

        // Create Bubble chart data
        let bubbleData = [{
            x: result.otu_ids,
            y: result.sample_values,
            text: result.otu_labels,
            mode: "markers",
            marker: {
                size: result.sample_values,
                color: result.otu_ids,
                colorscale: "Earth"
            }
        }];

        // Plot Bubble chart using Plotly
        Plotly.newPlot("bubble", bubbleData);

        // Fetch metadata for the given sample and log it
        let metadata = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
        console.log(metadata);

        // Display metadata on the webpage
        let metaDataDiv = d3.select("#sample-metadata");
        metaDataDiv.html("");
        Object.entries(metadata).forEach(([key, value]) => {
            metaDataDiv.append("h5").text(`${key}: ${value}`);
        });

        // Create Gauge Chart data for Belly Button Washing Frequency
        let washingFreq = metadata.wfreq;
        let gaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: washingFreq,
            title: { text: "Belly Button Washing Frequency<br>Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] },
                steps: [
                    { range: [0, 1], color: "lightgray" },
                    { range: [1, 2], color: "gray" },

                ]
            }
        }];

        // Plot the Gauge Chart using Plotly
        Plotly.newPlot("gauge", gaugeData);

    });
  }

  // Function to initialize the dashboard on loading
  function initialize() {
    // Fetch JSON data from the same URL
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {

        let sampleNames = data.names;  // Extract sample names
        let dropdown = d3.select("#selDataset");

        // Populate dropdown menu with the sample names
        sampleNames.forEach(name => {
            dropdown.append("option").text(name).property("value", name);
        });

        // Display data for the first sample by default
        plotData(sampleNames[0]);
    });
  }

  // Handle dropdown's change event to update visualizations
  function optionChanged(newSample) {
    plotData(newSample);
  }

  // Call initialize function to start the dashboard when the script runs
  initialize();
