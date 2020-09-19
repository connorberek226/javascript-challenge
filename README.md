# Javascript Challenge
## By: Connor Berek
## Background
For this challenge, we have been tasked with establishing a HTML page dedicated to documenting several close encounters of the 3rd kind. We were supplied with the data and the index file used for creating the HTML page.

We will allow our users to filter the table based on date of sighting for specific values. Using `JavaScript`, `HTML`, `CSS`, `D3.js` on our web pages.

## Level 1
### Appending the UFO Sightings data to the index.html file:

1. Called the `data.js` file into the `app.js` file:
 `const ufoSightings = data;`

2. Establish a function to append the UFO sightings dataset to the table in the `index.html` file.

3. Select the UFO sightings dataset and apply the `addToTable()` function to each value in the dataset.

### Filtering the data by `data/time`:

1. Establish a variable for the `button` used to filter through the table: `const enter = d3.select("#filter-btn");`

2. Create a function to run when the button is `"clicked"`.
 
    1. Grab the user input and take the value and establish a variable for it, `dateValue`.
    2. Establish a variable to filter through the UFO sighting dataset and only take the rows of data that match the date given by the user.
    3. Empty the placeholder table and add the data from the UFO sighting dataset to the table in the `index.html` file.
    
- - -

### Dataset

* [UFO Sightings Data](static/js/data.js)

- - -
### Resources
* [Starter Code: index.html and data.js](nu-chi-data-pt-06-2020-u-c/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode)
 
