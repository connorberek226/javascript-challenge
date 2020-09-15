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