// from data.js
const ufoSightings = data;
// console.log(ufoSightings);
function addToTable(sighting) {

    let tableBody = d3.select("tbody");

    let tr = tableBody.append("tr");

    Object.entries(sighting).forEach(([key, val]) => {
        const cell = tr.append("td").text(val);

    });
}

ufoSightings.forEach(addToTable);

const enter = d3.select("#filter-btn");

enter.on("click", function() {

    d3.event.preventDefault();

    const date = d3.select("#datetime");

    const dateValue = date.property("value");



    const filteredDates = ufoSightings.filter(date => date.datetime === dateValue);

    

    d3.select("tbody").html("");


    filteredDates.forEach(addToTable);

});