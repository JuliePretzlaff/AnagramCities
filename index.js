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
  // filter duplicate city names from each key's array into 'refreshedArray'
  for (var key in cityObject) {
    if (cityObject[key].length > 1) {
      let refreshedArray = [];
      for (let i = 0; i < cityObject[key].length; i++) {
        if (!refreshedArray.includes(cityObject[key][i]))
          refreshedArray.push(cityObject[key][i]);
        // filter duplicate anagram sets into 'finalRefreshedArray'
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

// print anagram sets to console
// finalRefreshedArray is array of arrays/sets of anagrams
function printStrings(finalRefreshedArray) {
  for (let i = 0; i < finalRefreshedArray.length; i++) {
    let stringToDisplay = '';
    for (let k = 0; k < finalRefreshedArray[i].length; k++) {
      if (k === finalRefreshedArray[i].length - 1) {
        stringToDisplay += `${finalRefreshedArray[i][k]}`;
      } else {
        stringToDisplay += `${finalRefreshedArray[i][k]}, `;
      }
    }
    console.log(stringToDisplay);
  }
}

const cityObject = hashCities(cities);
const finalRefreshedArray = removeDuplicates(cityObject);
printStrings(finalRefreshedArray);
