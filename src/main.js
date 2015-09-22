var ctx = document.getElementById("chart1").getContext("2d");

var g = Chart.defaults.global;
g.scaleBeginAtZero = false;
g.scaleFontColor = "#9FA0A4";
g.animation = false;
g.scaleOverride = true;
g.scaleSteps = 6;
g.scaleStepWidth = 10;
g.scaleStartValue = 0;
g.scaleFontFamily = 'Avenir Medium';
g.scaleFontSize = 24;


var data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SAN"],
    datasets: [
        {
            label: "Active players",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "#4e7c7c",
            pointColor: "#F4F5F7",
            pointStrokeColor: "#4e7c7c",
            pointHighlightFill: "#9EBC74",
            pointHighlightStroke: "fff",
            data: [40, 25, 30, 50, 30, 27, 40]
        }
    ]
};



var options = {
    //String - Colour of the grid lines
    scaleGridLineColor : '#CACACA',
    //Boolean - Whether the line is curved between points
    bezierCurve : false,
    //Number - Radius of each point dot in pixels
    pointDotRadius : 10,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20
};

var myLineChart = new Chart(ctx).Line(data, options);

var ctx = document.getElementById("chart2").getContext("2d");


var data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
    datasets: [
        {
            label: "Active players",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "#28374c",
            pointColor: "#F4F5F7",
            pointStrokeColor: "#28374c",
            pointHighlightFill: "#9EBC74",
            pointHighlightStroke: "fff",
            data: [450, 750, 900, 450, 600, 650, 300]
        }
    ]
};

g.scaleStepWidth = 150;

var myLineChart = new Chart(ctx).Line(data, options);