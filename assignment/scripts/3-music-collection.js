console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array.

let collection = [];

// Add a function named 'addToCollection'. This function should:
  // Take in the album's 'title', 'artist', and 'yearsPublished'
  // Create a new object having the above properties
  // Add the new object to the end of the 'collection' array
  // Return the newly created object

function addToCollection(title, artist, yearPublished) {
  console.log('in addToCollection');
  let album = { // object 'ablum' created to store 'title', 'artist', and 'yearsPublished' properties
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

console.log(addToCollection('Justice', 'Justin Bieber', '2021'));
console.log(addToCollection('Donda', 'Kanye West', '2021'));
console.log(addToCollection('Seasons Change', 'Scotty McCreery', '2018'));
console.log(addToCollection('Uncomfortable', 'Andy Mineo', '2015'));
console.log(addToCollection('Work in Progress', 'Andy Mineo', '2019'));
console.log(addToCollection('Mmhmm', 'Reliant K', '2004'));

// TEST: Log 'collection' array

console.log(collection);
// Statement output:
  // 0: {title: 'Justice', artist: 'Justin Bieber', yearPublished: '2021'}
  // 1: {title: 'Donda', artist: 'Kanye West', yearPublished: '2021'}
  // 2: {title: 'Seasons Change', artist: 'Scotty McCreery', yearPublished: '2018'}
  // 3: {title: 'Uncomfortable', artist: 'Andy Mineo', yearPublished: '2015'}
  // 4: {title: 'Work in Progress', artist: 'Andy Mineo', yearPublished: '2019'}
  // 5: {title: 'Mmhmm', artist: 'Reliant K', yearPublished: '2004'}
