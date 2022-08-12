// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#pie")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
d3.csv("pie/cds.csv").then(function(data) {
// set the color scale

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value.general_2016 })
  
var data_ready = pie(d3.entries(data))

// shape helper to build arcs:
var arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)
// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('Slices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  // Now add the annotation. Use the centroid method to get the best coordinates
svg
.selectAll('Slices')
.data(data_ready)
.enter()
.append('text')
.text(function(d){
        if(d.data.value.congressional_district<10){
                 return "CD :"  + d.data.value.congressional_district
    }}
    )
.attr("transform", (d)  => "translate(" + arcGenerator.centroid(d) + ")")
.style("text-anchor", "middle")
.style("font-size", 17)

console.log(data)
})