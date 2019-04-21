const cities = require('cities.json');

// hash city name then add it to object at proper key
function hashCities(cities) {
  let cityObject = {};

  cities.forEach(city => {
    let hashedCity = '';
    const sortedCity = city.name
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    for (let i = 0; i < sortedCity.length; i++) {
      hashedCity += sortedCity.charCodeAt(i);
    }
    // insert original city name at proper hashed key
    if (!cityObject[hashedCity]) {
      cityObject[hashedCity] = [city.name];
    } else {
      cityObject[hashedCity].push(city.name);
    }
  });
  return cityObject;
}

function removeDuplicates(cityObject) {
  let finalRefreshedArray = [];
  // filter duplicate city names (case insensitve) from each key's array into 'refreshedArray'
  // to ensure the following string is not printed: 'Homer, Homer, Homer, Homer'
  for (var key in cityObject) {
    if (cityObject[key].length > 1) {
      let refreshedArray = [];
      for (let i = 0; i < cityObject[key].length; i++) {
        let cityIndex = refreshedArray.findIndex(
          existingItem =>
            cityObject[key][i].toLowerCase() === existingItem.toLowerCase()
        );
        if (cityIndex === -1) refreshedArray.push(cityObject[key][i]);
        // filter duplicate anagram sets into 'finalRefreshedArray'
        // to ensure two strings of 'Homer, Rhome' are not printed
        if (
          refreshedArray.length > 1 &&
          !finalRefreshedArray.includes(refreshedArray)
        ) {
          finalRefreshedArray.push(refreshedArray);
        }
      }
    }
  }
  return finalRefreshedArray;
}

// format string and print anagram sets to console
// finalRefreshedArray is array of arrays/sets of anagrams with all duplicates removed
function printStrings(finalRefreshedArray) {
  for (let i = 0; i < finalRefreshedArray.length; i++) {
    let stringToDisplay = '';
    for (let j = 0; j < finalRefreshedArray[i].length; j++) {
      if (j === finalRefreshedArray[i].length - 1) {
        stringToDisplay += `${finalRefreshedArray[i][j]}`;
      } else {
        stringToDisplay += `${finalRefreshedArray[i][j]}, `;
      }
    }
    console.log(stringToDisplay);
  }
}

const cityObject = hashCities(cities);
const finalRefreshedArray = removeDuplicates(cityObject);
printStrings(finalRefreshedArray);
