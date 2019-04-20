const cities = require('cities.json');

function hashCities(cities) {
  let cityObject = {};

  // hash city name then add it to object
  cities.forEach(city => {
    let hashedCity = '';
    const lowerCaseCity = city.name
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    for (let i = 0; i < lowerCaseCity.length; i += 1) {
      hashedCity += lowerCaseCity.charCodeAt(i);
    }
    if (!cityObject[hashedCity]) {
      cityObject[hashedCity] = [city.name];
    } else {
      cityObject[hashedCity].push(city.name);
    }
  });
  // no duplicates here
  let finalFreshArray = [];

  // remove duplicate city names from each key's array
  for (var key in cityObject) {
    if (cityObject[key].length > 1) {
      var freshArray = [];
      let stringToDisplay = '';
      for (let i = 0; i < cityObject[key].length; i += 1) {
        if (!freshArray.includes(cityObject[key][i]))
          freshArray.push(cityObject[key][i]);
        if (freshArray.length > 1 && !finalFreshArray.includes(freshArray)) {
          finalFreshArray.push(freshArray);
        }
      }
    }
  }
  console.log(finalFreshArray);
  for (let i = 0; i < finalFreshArray.length; i++) {
    let stringToDisplay = '';
    for (let k = 0; k < finalFreshArray[i].length; k++) {
      if (k === finalFreshArray[i].length - 1) {
        stringToDisplay += `${finalFreshArray[i][k]}`;
      } else {
        stringToDisplay += `${finalFreshArray[i][k]}, `;
      }
    }

    console.log(stringToDisplay);
  }
}

let test = [
  { name: 'Tokyo' },
  { name: 'Kyoto' },
  { name: 'i h' },
  { name: 'hi' },
  { name: 'iihi' },
  { name: 'hi' },
  { name: 'hi' }
];

hashCities(cities);
