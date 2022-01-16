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
  collection.push(album); // adds object 'allbum' to end of 'collection' array
  return album;
} // end addToCollection
