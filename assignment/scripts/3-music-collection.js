console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array.

let collection = [];

// Add a function named 'addToCollection'. This function should:
  // Take in the album's 'title', 'artist', and 'yearPublished'
  // Create a new object having the above properties
  // Add the new object to the end of the 'collection' array
  // Return the newly created object

function addToCollection(title, artist, yearPublished) {
  console.log('in addToCollection');
  let album = { // object 'ablum' created to store 'title', 'artist', and 'yearPublished' properties
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album); // adds object 'album' to end of 'collection' array
  return album; // Returns object 'album' whenever function is run
} // end addToCollection


// Test the addToCollection function by:
  // Adding 6 albums to the 'collection' array
  // Logging each album as added using the returned value
  // After all albums are added, logging the 'collection' array

// TEST: Logging each album as added using returned value

console.log(addToCollection('Justice', 'Justin Bieber', 2021));
console.log(addToCollection('Donda', 'Kanye West', 2021));
console.log(addToCollection('Seasons Change', 'Scotty McCreery', 2018));
console.log(addToCollection('Uncomfortable', 'Andy Mineo', 2015));
console.log(addToCollection('Work in Progress', 'Andy Mineo', 2019));
console.log(addToCollection('Mmhmm', 'Reliant K', 2004));

// TEST: Log 'collection' array

console.log(collection);
// Statement output:
  // 0: {title: 'Justice', artist: 'Justin Bieber', yearPublished: '2021'}
  // 1: {title: 'Donda', artist: 'Kanye West', yearPublished: '2021'}
  // 2: {title: 'Seasons Change', artist: 'Scotty McCreery', yearPublished: '2018'}
  // 3: {title: 'Uncomfortable', artist: 'Andy Mineo', yearPublished: '2015'}
  // 4: {title: 'Work in Progress', artist: 'Andy Mineo', yearPublished: '2019'}
  // 5: {title: 'Mmhmm', artist: 'Reliant K', yearPublished: '2004'}



  // Add a function named 'showCollection'. This function should:
    // Take in an array paramater.
    // Console.log the number of items in the array.
    // Loop over the array and console.log each album's information, formatted like: 'TITLE' by 'ARTIST', published in 'YEAR'.

function showCollection (array) {
  console.log('in showCollection');
  console.log(array.length); // used to define number of values (or objects, 'albums') within array ('collection')
  for (let index of array) { // for of loop used to loop through each index ('album') within the array ('collection')
    console.log(`${index.title} by ${index.artist} in ${index.yearPublished}`);
  } // end for of loop
} // end showCollection

// TEST the showCollection Function

showCollection(collection);
// Statement output:
  // in showCollection
  // 6
  // Justice by Justin Bieber in 2021
  // Donda by Kanye West in 2021
  // Seasons Change by Scotty McCreery in 2018
  // Uncomfortable by Andy Mineo in 2015
  // Work in Progress by Andy Mineo in 2019
  // Mmhmm by Reliant K in 2004



// EXTRA PRACTICE: Pull all artists from the 'collection' array
  // function was created to help me understand how to pull properties from objects within array

  function getArtists(input, field) {
    console.log('in getArtist');
    let output= [];
    for (let i=0; i<input.length; i++) { // loops through collection array
      output.push(input[i][field]); // adds artists to 'output' array
    } return output; // returns list artists as values within 'output' array
  } // end getArtist

  console.log(getArtists(collection, 'artist'));



// Add a function named 'findByArtist'. This function should:
  // Take in 'artist' (a string) parameter
  // Create an array to hold any results, empty to start
  // Loop through the 'collection' and add any objects with a matching artist to the array
  // Return the array with the matching results. If no results are found, return an empty array

function findByArtist(artist) {
  console.log('in findByArtist');
  let results = [];
  for (let i=0; i<collection.length; i++) { // loops through 'collection' array
    if (collection[i].artist === artist) { // conditional used to determine if 'artist' is within 'collection' array
        results.push(collection[i]); // adds 'album' object of 'collection' array if 'album' meets condition
    }
  } return results; // returns 'results' array after looping through 'collection' array
} // end findByArtist

console.log(findByArtist('Andy Mineo'));
// Statement output:
  // (2) [{…}, {…}]
  // 0: {title: 'Uncomfortable', artist: 'Andy Mineo', yearPublished: '2015'}
  // 1: {title: 'Work in Progress', artist: 'Andy Mineo', yearPublished: '2019'}
  // length: 2

  console.log(findByArtist('Justin Bieber'));
  // Statement output:
    // [{…}]
    // 0: {title: 'Justice', artist: 'Justin Bieber', yearPublished: '2021'}
    // length: 1

  console.log(findByArtist('Taylor Switft')); // Statement output: returns empty array ([])



// Create a function called 'search'. This function should:
  // Take an input peramter for a search criteria object. Create your solution based on a search object that has these properties.
  // The returned output from 'search' should meet these requirements:
    // Return a new array of all items in the 'collection' matching all of the search criteria (use conditional + &&)
    // If no results are found, return an empty array
    // If there is no search object or an empty search object provided as input, then return all albums in the 'collection'

// EXTRA PRACTICE: Learning to see how a function recieves an object as an input

// function test(object){
//   console.log('in test');
//   return object;
// } // end test
//
// console.log(test({artist:'Ray Charles', year: 1957}));

function search(object){
  console.log('in search');

  let searchResults = []; // if object is found within 'collection', it will be pushed to this empty array

  if (object === undefined || Object.keys(object) == 0)  {
    return collection; // will return 'collection' array if there's no search object or an empty serach object provided as input
  }

  for (let i=0; i<collection.length; i++) { // loops through 'collection' array
    if (collection[i].artist === object.artist && collection[i].yearPublished == object.year) { // object must match the artist and year keys within 'collection' array
      searchResults.push(collection[i]); // if conditions are met, the album will be added to empty 'output' array
      }
  } return searchResults; // function will return 'searchResults' array -- will include album if criteria is met or empty array if there's no match
} // end search

console.log(search()); // Statement output: 'collection' array

console.log(search({})); // Statement output: 'collection' array

console.log(search({artist: 'Andy Mineo', year: 2015})); // Statement output: {title: 'Uncomfortable', artist: 'Andy Mineo', yearPublished: '2015'}

console.log(search({artist: 'Taylor Swift', year: 2017})); // Statement output: [] (empty array)



// Add an array of tracks to your album objects. Each track should have a 'name' and 'duration'. You will need to update the functions to support this new property.
  // Update the 'addToCollection' function to also take an input paramter for the array of tracks
  // Update 'search' to allow a 'trackName' search criteria
  // Update the 'showCollection' function to display the list of tracks for each album with its name and duration
