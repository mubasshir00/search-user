import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: "column3d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "Most Popular Language",
                yAxisName:"Stars",
                XAxisName:"Repos",
                XAxisNameFontSize:"16px",
                YAxisNameFontSize: "16px",
                paletteColors: '#F84B0A,F8DF0A,#0A2EF8,#0AF8DB,#000000,#784212,#76F80A,#CD853F,#708090,#FF6347,#9370DB',
            },
            // Chart Data
            data,
        }
    };
    return <ReactFC {...chartConfigs} />
};

export default ChartComponent