// from data.js
const ufoSightings = data;
// console.log(ufoSightings);

function addToTable(sighting) {

    // select table in index.html using d3
    let tableBody = d3.select("tbody");

    // append rows to table
    let tr = tableBody.append("tr");

    // takes each key in the dataset and returns the value 
    // then appends it to the table.
    Object.entries(sighting).forEach(([key, val]) => {
        const cell = tr.append("td").text(val);

    });
}
// performs the addToTable() function for the UFO 
// sightings data we were supplied. 
ufoSightings.forEach(addToTable);

// adds the button used to filter the table
const enter = d3.select("#filter-btn");
// enter.on based on click will run when someone types
// types in a date and click "Filter Table"
enter.on("click", function() {

    // prevents the table from refreshing when filtering.
    d3.event.preventDefault();

    // grabs the input from the user and holds it as a 
    // variable from index.html.
    const date = d3.select("#datetime");

    // takes the value from what was inputted by the user.
    const dateValue = date.property("value");


    // applies the filter for the date given by the user
    // and matches it to the same date and data in the UFO
    // sighting dataset.
    const filteredDates = ufoSightings.filter(date => date.datetime === dateValue);

    
    // empties the table in the index.html file to be
    // replaced by the filtered data.
    d3.select("tbody").html("");

    // Takes all the values from the filteredDates variable
    // and runs the addToTable function to fill the table
    // with the filtered UFO data.
    filteredDates.forEach(addToTable);

});