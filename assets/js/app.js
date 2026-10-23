// Task 1 For each
var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];

var result = '';

planets.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.planetName}</td>
            <td>${params.distanceFromSunKm}</td>
            <td>${params.diameterKm}</td>
            <td>${params.hasRings}</td>
            <td>${params.numberOfMoons}</td>

    `;
});

document.getElementById('planetsInfo').innerHTML = result;

// Task 1 For loop
var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];



var result = '';

for (var i = 0; i < planets.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${planets[i].planetName}</td>
            <td>${planets[i].distanceFromSunKm}</td>
            <td>${planets[i].diameterKm}</td>
            <td>${planets[i].hasRings}</td>
            <td>${planets[i].numberOfMoons}</td>
        </tr>
    `;
}

document.getElementById('planetsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 2 For each
var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];
var result = '';

mountains.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.mountainName}</td>
            <td>${params.heightMeters}</td>
            <td>${params.locationContinent}</td>
            <td>${params.firstAscentYear}</td>
            <td>${params.isVolcano}</td>

    `;
});

document.getElementById('mountainsInfo').innerHTML = result;

// Task 2 For loop
var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];


var result = '';

for (var i = 0; i < mountains.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${mountains[i].mountainName}</td>
            <td>${mountains[i].heightMeters}</td>
            <td>${mountains[i].locationContinent}</td>
            <td>${mountains[i].firstAscentYear}</td>
            <td>${mountains[i].isVolcano}</td>
        </tr>
    `;
}

document.getElementById('mountainsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 3 For each
var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];
var result = '';

universities.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.uniName}</td>
            <td>${params.foundedYear}</td>
            <td>${params.countryLocated}</td>
            <td>${params.studentCount}</td>
            <td>${params.worldRanking}</td>

    `;
});

document.getElementById('universitiesInfo').innerHTML = result;

// Task 3 For loop
var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];

var result = '';

for (var i = 0; i < universities.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${universities[i].uniName}</td>
            <td>${universities[i].foundedYear}</td>
            <td>${universities[i].countryLocated}</td>
            <td>${universities[i].studentCount}</td>
            <td>${universities[i].worldRanking}</td>
        </tr>
    `;
}

document.getElementById('universitiesInfo2').innerHTML = result;

//  ==========================================================================================
// Task 4 For each
var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];
var result = '';

animals.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.species}</td>
            <td>${params.averageWeightKg}</td>
            <td>${params.habitatType}</td>
            <td>${params.lifespanYears}</td>
            <td>${params.endangeredStatus}</td>

    `;
});

document.getElementById('animalsInfo').innerHTML = result;

// Task 4 For loop
var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];
var result = '';

for (var i = 0; i < animals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${animals[i].species}</td>
            <td>${animals[i].averageWeightKg}</td>
            <td>${animals[i].habitatType}</td>
            <td>${animals[i].lifespanYears}</td>
            <td>${animals[i].endangeredStatus}</td>
        </tr>
    `;
}

document.getElementById('animalsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 5 For each
var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];
var result = '';

apps.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.appName}</td>
            <td>${params.categoryType}</td>
            <td>${params.downloadsMillion}</td>
            <td>${params.developerCompany}</td>
            <td>${params.subscriptionRequired}</td>
        </tr>
    `;
});

document.getElementById('appsInfo').innerHTML = result;

// Task 5 For loop
var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];
var result = '';

for (var i = 0; i < apps.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${apps[i].appName}</td>
            <td>${apps[i].categoryType}</td>
            <td>${apps[i].downloadsMillion}</td>
            <td>${apps[i].developerCompany}</td>
            <td>${apps[i].subscriptionRequired}</td>
        </tr>
    `;
}
document.getElementById('appsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 6 For each
var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];
var result = '';

continents.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.continentLabel}</td>
            <td>${params.surfaceAreaMillionSqKm}</td>
            <td>${params.countriesCount}</td>
            <td>${params.populationBillion}</td>
            <td>${params.largestCountry}</td>
        </tr>
    `;
});

document.getElementById('continentsInfo').innerHTML = result;

// Task 6 For loop
var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];
var result = '';

for (var i = 0; i < continents.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${continents[i].continentLabel}</td>
            <td>${continents[i].surfaceAreaMillionSqKm}</td>
            <td>${continents[i].countriesCount}</td>
            <td>${continents[i].populationBillion}</td>
            <td>${continents[i].largestCountry}</td>
        </tr>
    `;
}
document.getElementById('continentsInfo2').innerHTML = result;


//  ==========================================================================================
// Task 7 For each
var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];
var result = '';

desserts.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.dessertName}</td>
            <td>${params.sugarContentGrams}</td>
            <td>${params.servingTemp}</td>
            <td>${params.mainIngredient}</td>
            <td>${params.calorieCount}</td>
        </tr>
    `;
});

document.getElementById('dessertsInfo').innerHTML = result;

// Task 7 For loop
var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];
var result = '';

for (var i = 0; i < desserts.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${desserts[i].dessertName}</td>
            <td>${desserts[i].sugarContentGrams}</td>
            <td>${desserts[i].servingTemp}</td>
            <td>${desserts[i].mainIngredient}</td>
            <td>${desserts[i].calorieCount}</td>
        </tr>
    `;
}
document.getElementById('dessertsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 8 For each
var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];
var result = '';

oceans.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.oceanTitle}</td>
            <td>${params.avgDepthMeters}</td>
            <td>${params.surfaceAreaMillionSqKm}</td>
            <td>${params.borderingContinents}</td>
            <td>${params.salinityPpt}</td>
        </tr>
    `;
});

document.getElementById('oceansInfo').innerHTML = result;

// Task 8 For loop
var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];
var result = '';

for (var i = 0; i < oceans.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${oceans[i].oceanTitle}</td>
            <td>${oceans[i].avgDepthMeters}</td>
            <td>${oceans[i].surfaceAreaMillionSqKm}</td>
            <td>${oceans[i].borderingContinents}</td>
            <td>${oceans[i].salinityPpt}</td>
        </tr>
    `;
}
document.getElementById('oceansInfo2').innerHTML = result;


//  ==========================================================================================
// Task 9 For each
var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];

var result = '';

gadgets.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.gadgetLabel}</td>
            <td>${params.featuresCount}</td>
            <td>${params.batteryLifeHours}</td>
            <td>${params.connectivityType}</td>
            <td>${params.weightGrams}</td>
        </tr>
    `;
});

document.getElementById('gadgetsInfo').innerHTML = result;

// Task 9 For loop
var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];
var result = '';

for (var i = 0; i < gadgets.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${gadgets[i].gadgetLabel}</td>
            <td>${gadgets[i].featuresCount}</td>
            <td>${gadgets[i].batteryLifeHours}</td>
            <td>${gadgets[i].connectivityType}</td>
            <td>${gadgets[i].weightGrams}</td>
        </tr>
    `;
}
document.getElementById('gadgetsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 10 For each
var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];

var result = '';

landmarks.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.landmarkLabel}</td>
            <td>${params.heightMeters}</td>
            <td>${params.visitorCountYearMillion}</td>
            <td>${params.countryLocation}</td>
            <td>${params.constructionYear}</td>
        </tr>
    `;
});

document.getElementById('landmarksInfo').innerHTML = result;

// Task 10 For loop
var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];
var result = '';

for (var i = 0; i < landmarks.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${landmarks[i].landmarkLabel}</td>
            <td>${landmarks[i].heightMeters}</td>
            <td>${landmarks[i].visitorCountYearMillion}</td>
            <td>${landmarks[i].countryLocation}</td>
            <td>${landmarks[i].constructionYear}</td>
        </tr>
    `;
}
document.getElementById('landmarksInfo2').innerHTML = result;

//  ==========================================================================================
// Task 11 For each
var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];

var result = '';

vehiclesModels.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.vehicleType}</td>
            <td>${params.maxSpeedKph}</td>
            <td>${params.fuelCapacityLiters}</td>
            <td>${params.wheelCount}</td>
            <td>${params.manufacturerLocation}</td>
        </tr>
    `;
});

document.getElementById('vehiclesInfo').innerHTML = result;

// Task 11 For loop
var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];

var result = '';

for (var i = 0; i < vehiclesModels.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${vehiclesModels[i].vehicleType}</td>
            <td>${vehiclesModels[i].maxSpeedKph}</td>
            <td>${vehiclesModels[i].fuelCapacityLiters}</td>
            <td>${vehiclesModels[i].wheelCount}</td>
            <td>${vehiclesModels[i].manufacturerLocation}</td>
        </tr>
    `;
}
document.getElementById('vehiclesInfo2').innerHTML = result;

//  ==========================================================================================
// Task 12 For each
var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];

var result = '';

professions.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.professionName}</td>
            <td>${params.avgSalaryUSD}</td>
            <td>${params.yearsOfStudy}</td>
            <td>${params.riskLevel}</td>
            <td>${params.workEnvironment}</td>
        </tr>
    `;
});

document.getElementById('professionsInfo').innerHTML = result;

// Task 12 For loop
var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];

var result = '';

for (var i = 0; i < professions.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${professions[i].professionName}</td>
            <td>${professions[i].avgSalaryUSD}</td>
            <td>${professions[i].yearsOfStudy}</td>
            <td>${professions[i].riskLevel}</td>
            <td>${professions[i].workEnvironment}</td>
        </tr>
    `;
}
document.getElementById('professionsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 13 For each
var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];

var result = '';

beveragesMenu.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.beverageTitle}</td>
            <td>${params.caffeineMg}</td>
            <td>${params.servingSizeMl}</td>
            <td>${params.servedHot ? 'Yes' : 'No'}</td>
            <td>${params.sugarContentG}</td>
        </tr>
    `;
});

document.getElementById('beveragesInfo').innerHTML = result;

// Task 13 For loop
var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];

var result = '';

for (var i = 0; i < beveragesMenu.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${beveragesMenu[i].beverageTitle}</td>
            <td>${beveragesMenu[i].caffeineMg}</td>
            <td>${beveragesMenu[i].servingSizeMl}</td>
            <td>${beveragesMenu[i].servedHot ? 'Yes' : 'No'}</td>
            <td>${beveragesMenu[i].sugarContentG}</td>
        </tr>
    `;
}
document.getElementById('beveragesInfo2').innerHTML = result;

//  ==========================================================================================
// Task 14 For each
var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];

var result = '';

flowers.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.flowerName}</td>
            <td>${params.petalCount}</td>
            <td>${params.fragranceLevel}</td>
            <td>${params.bloomingSeason}</td>
            <td>${params.stemLengthCm}</td>
        </tr>
    `;
});

document.getElementById('flowersInfo').innerHTML = result;

// Task 14 For loop
var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];

var result = '';

for (var i = 0; i < flowers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${flowers[i].flowerName}</td>
            <td>${flowers[i].petalCount}</td>
            <td>${flowers[i].fragranceLevel}</td>
            <td>${flowers[i].bloomingSeason}</td>
            <td>${flowers[i].stemLengthCm}</td>
        </tr>
    `;
}
document.getElementById('flowersInfo2').innerHTML = result;

//  ==========================================================================================
// Task 15 For each
var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];

var result = '';

hotels.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.hotelLabel}</td>
            <td>${params.stars}</td>
            <td>${params.totalRooms}</td>
            <td>${params.poolAvailable ? 'Yes' : 'No'}</td>
            <td>${params.cityLoc}</td>
        </tr>
    `;
});

document.getElementById('hotelsInfo').innerHTML = result;

// Task 15 For loop
var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];
var result = '';

for (var i = 0; i < hotels.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${hotels[i].hotelLabel}</td>
            <td>${hotels[i].stars}</td>
            <td>${hotels[i].totalRooms}</td>
            <td>${hotels[i].poolAvailable ? 'Yes' : 'No'}</td>
            <td>${hotels[i].cityLoc}</td>
        </tr>
    `;
}
document.getElementById('hotelsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 16 For each
var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];

var result = '';

islands.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.islandLabel}</td>
            <td>${params.areaSqKm}</td>
            <td>${params.countryAdmin}</td>
            <td>${params.inhabited ? 'Yes' : 'No'}</td>
            <td>${params.climateType}</td>
        </tr>
    `;
});

document.getElementById('islandsInfo').innerHTML = result;

// Task 16 For loop
var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];
var result = '';

for (var i = 0; i < islands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${islands[i].islandLabel}</td>
            <td>${islands[i].areaSqKm}</td>
            <td>${islands[i].countryAdmin}</td>
            <td>${islands[i].inhabited ? 'Yes' : 'No'}</td>
            <td>${islands[i].climateType}</td>
        </tr>
    `;
}
document.getElementById('islandsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 17 For each
var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];

var result = '';

insects.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.insectName}</td>
            <td>${params.wingspanCm}</td>
            <td>${params.legsCount}</td>
            <td>${params.lifespanDays}</td>
            <td>${params.canFly ? 'Yes' : 'No'}</td>
        </tr>
    `;
});

document.getElementById('insectsInfo').innerHTML = result;

// Task 17 For loop
var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];
var result = '';

for (var i = 0; i < insects.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${insects[i].insectName}</td>
            <td>${insects[i].wingspanCm}</td>
            <td>${insects[i].legsCount}</td>
            <td>${insects[i].lifespanDays}</td>
            <td>${insects[i].canFly ? 'Yes' : 'No'}</td>
        </tr>
    `;
}
document.getElementById('insectsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 18 For each
var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];

var result = '';

festivals.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.festivalName}</td>
            <td>${params.monthObserved}</td>
            <td>${params.durationDays}</td>
            <td>${params.originCountry}</td>
            <td>${params.outdoorEvent ? 'Yes' : 'No'}</td>
        </tr>
    `;
});

document.getElementById('festivalsInfo').innerHTML = result;

// Task 18 For loop
var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];
var result = '';

for (var i = 0; i < festivals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${festivals[i].festivalName}</td>
            <td>${festivals[i].monthObserved}</td>
            <td>${festivals[i].durationDays}</td>
            <td>${festivals[i].originCountry}</td>
            <td>${festivals[i].outdoorEvent ? 'Yes' : 'No'}</td>
        </tr>
    `;
}
document.getElementById('festivalsInfo2').innerHTML = result;

//  ==========================================================================================
// Task 19 For each
var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];

var result = '';

rivers.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.riverLabel}</td>
            <td>${params.lengthKm}</td>
            <td>${params.flowsThroughCountries}</td>
            <td>${params.avgDepthM}</td>
            <td>${params.deltaExists ? 'Yes' : 'No'}</td>
        </tr>
    `;
});

document.getElementById('riversInfo').innerHTML = result;

// Task 19 For loop
var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];
var result = '';

for (var i = 0; i < rivers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${rivers[i].riverLabel}</td>
            <td>${rivers[i].lengthKm}</td>
            <td>${rivers[i].flowsThroughCountries}</td>
            <td>${rivers[i].avgDepthM}</td>
            <td>${rivers[i].deltaExists ? 'Yes' : 'No'}</td>
        </tr>
    `;
}
document.getElementById('riversInfo2').innerHTML = result;

//  ==========================================================================================
// Task 20 For each
var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];

var result = '';

spices.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.spiceName}</td>
            <td>${params.colorHue}</td>
            <td>${params.originRegion}</td>
            <td>${params.pungencyLevel}</td>
            <td>${params.isPowdered ? 'Yes' : 'No'}</td>
        </tr>
    `;
});

document.getElementById('spicesInfo').innerHTML = result;

// Task 20 For loop
var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];
var result = '';

for (var i = 0; i < spices.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${spices[i].spiceName}</td>
            <td>${spices[i].colorHue}</td>
            <td>${spices[i].originRegion}</td>
            <td>${spices[i].pungencyLevel}</td>
            <td>${spices[i].isPowdered ? 'Yes' : 'No'}</td>
        </tr>
    `;
}
document.getElementById('spicesInfo2').innerHTML = result;

//  ==========================================================================================
// Task 21 For each
var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];

var result = '';

tools.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.toolName}</td>
            <td>${params.weightKg}</td>
            <td>${params.handleMaterial}</td>
            <td>${params.manualTool ? 'Yes' : 'No'}</td>
            <td>${params.usageCategory}</td>
        </tr>
    `;
});

document.getElementById('toolsInfo').innerHTML = result;

// Task 21 For loop
var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];
var result = '';

for (var i = 0; i < tools.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${tools[i].toolName}</td>
            <td>${tools[i].weightKg}</td>
            <td>${tools[i].handleMaterial}</td>
            <td>${tools[i].manualTool ? 'Yes' : 'No'}</td>
            <td>${tools[i].usageCategory}</td>
        </tr>
    `;
}
document.getElementById('toolsInfo2').innerHTML = result;


// ==========================================================================================
// Task 22 Minerals

var minerals = [
    { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
    { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
    { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
    { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
    { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];

// For Each

var result = '';

minerals.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.mineralLabel}</td>
            <td>${params.hardnessMoh}</td>
            <td>${params.crystalSystem}</td>
            <td>${params.isMetallic ? 'Yes' : 'No'}</td>
            <td>${params.marketPriceUSDkg}</td>
        </tr>
    `;
});

document.getElementById('mineralsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < minerals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${minerals[i].mineralLabel}</td>
            <td>${minerals[i].hardnessMoh}</td>
            <td>${minerals[i].crystalSystem}</td>
            <td>${minerals[i].isMetallic ? 'Yes' : 'No'}</td>
            <td>${minerals[i].marketPriceUSDkg}</td>
        </tr>
    `;
}

document.getElementById('mineralsInfo2').innerHTML = result;


// ==========================================================================================
// Task 23 Planets Moons

var planetsMoons = [
    { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
    { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
    { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
    { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
    { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];

// For Each

var result = '';

planetsMoons.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.moonLabel}</td>
            <td>${params.orbitingPlanet}</td>
            <td>${params.diameterKm}</td>
            <td>${params.discoveredYear}</td>
            <td>${params.surfaceMaterial}</td>
        </tr>
    `;
});

document.getElementById('planetsMoonsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < planetsMoons.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${planetsMoons[i].moonLabel}</td>
            <td>${planetsMoons[i].orbitingPlanet}</td>
            <td>${planetsMoons[i].diameterKm}</td>
            <td>${planetsMoons[i].discoveredYear}</td>
            <td>${planetsMoons[i].surfaceMaterial}</td>
        </tr>
    `;
}

document.getElementById('planetsMoonsInfo2').innerHTML = result;


// ==========================================================================================
// Task 24 Musical Bands

var musicalBands = [
    { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
    { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
    { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
    { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
    { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];

// For Each

var result = '';

musicalBands.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.bandLabel}</td>
            <td>${params.originCity}</td>
            <td>${params.formedYear}</td>
            <td>${params.genreStyle}</td>
            <td>${params.albumsCount}</td>
        </tr>
    `;
});

document.getElementById('musicalBandsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < musicalBands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${musicalBands[i].bandLabel}</td>
            <td>${musicalBands[i].originCity}</td>
            <td>${musicalBands[i].formedYear}</td>
            <td>${musicalBands[i].genreStyle}</td>
            <td>${musicalBands[i].albumsCount}</td>
        </tr>
    `;
}

document.getElementById('musicalBandsInfo2').innerHTML = result;


// ==========================================================================================
// Task 25 Cities Metro

var citiesMetro = [
    { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
    { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
    { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
    { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
    { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];

// For Each

var result = '';

citiesMetro.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.metroLabel}</td>
            <td>${params.trackLengthKm}</td>
            <td>${params.totalStations}</td>
            <td>${params.dailyRidershipMillion}</td>
            <td>${params.operatingSince}</td>
        </tr>
    `;
});

document.getElementById('citiesMetroInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < citiesMetro.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${citiesMetro[i].metroLabel}</td>
            <td>${citiesMetro[i].trackLengthKm}</td>
            <td>${citiesMetro[i].totalStations}</td>
            <td>${citiesMetro[i].dailyRidershipMillion}</td>
            <td>${citiesMetro[i].operatingSince}</td>
        </tr>
    `;
}

document.getElementById('citiesMetroInfo2').innerHTML = result;


// ==========================================================================================
// Task 26 Scientific Discoveries

var sciDiscoveries = [
    { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
    { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
    { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
    { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
    { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];

// For Each

var result = '';

sciDiscoveries.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.discoveryLabel}</td>
            <td>${params.discoveredBy}</td>
            <td>${params.yearMade}</td>
            <td>${params.fieldArea}</td>
            <td>${params.impactLevel}</td>
        </tr>
    `;
});

document.getElementById('sciDiscoveriesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < sciDiscoveries.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${sciDiscoveries[i].discoveryLabel}</td>
            <td>${sciDiscoveries[i].discoveredBy}</td>
            <td>${sciDiscoveries[i].yearMade}</td>
            <td>${sciDiscoveries[i].fieldArea}</td>
            <td>${sciDiscoveries[i].impactLevel}</td>
        </tr>
    `;
}

document.getElementById('sciDiscoveriesInfo2').innerHTML = result;


// ==========================================================================================
// Task 27 National Parks

var nationalParks = [
    { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
    { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
    { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
    { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
    { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];

// For Each

var result = '';

nationalParks.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.parkLabel}</td>
            <td>${params.countryLocated}</td>
            <td>${params.establishedYear}</td>
            <td>${params.areaSqKm}</td>
            <td>${params.annualVisitorsMillion}</td>
        </tr>
    `;
});

document.getElementById('nationalParksInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < nationalParks.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${nationalParks[i].parkLabel}</td>
            <td>${nationalParks[i].countryLocated}</td>
            <td>${nationalParks[i].establishedYear}</td>
            <td>${nationalParks[i].areaSqKm}</td>
            <td>${nationalParks[i].annualVisitorsMillion}</td>
        </tr>
    `;
}

document.getElementById('nationalParksInfo2').innerHTML = result;


// ==========================================================================================
// Task 28 Art Paintings

var artPaintings = [
    { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
    { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
    { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
    { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
    { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];

// For Each

var result = '';

artPaintings.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.paintingTitle}</td>
            <td>${params.artistName}</td>
            <td>${params.yearCreated}</td>
            <td>${params.styleType}</td>
            <td>${params.currentLocation}</td>
        </tr>
    `;
});

document.getElementById('artPaintingsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < artPaintings.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${artPaintings[i].paintingTitle}</td>
            <td>${artPaintings[i].artistName}</td>
            <td>${artPaintings[i].yearCreated}</td>
            <td>${artPaintings[i].styleType}</td>
            <td>${artPaintings[i].currentLocation}</td>
        </tr>
    `;
}

document.getElementById('artPaintingsInfo2').innerHTML = result;


// ==========================================================================================
// Task 29 Historical Battles

var historicalBattles = [
    { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
    { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
    { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
    { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
    { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];

// For Each

var result = '';

historicalBattles.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.battleName}</td>
            <td>${params.battleYear}</td>
            <td>${params.mainCombatants}</td>
            <td>${params.outcome}</td>
            <td>${params.casualtiesApprox}</td>
        </tr>
    `;
});

document.getElementById('historicalBattlesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < historicalBattles.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${historicalBattles[i].battleName}</td>
            <td>${historicalBattles[i].battleYear}</td>
            <td>${historicalBattles[i].mainCombatants}</td>
            <td>${historicalBattles[i].outcome}</td>
            <td>${historicalBattles[i].casualtiesApprox}</td>
        </tr>
    `;
}

document.getElementById('historicalBattlesInfo2').innerHTML = result;


// ==========================================================================================
// Task 30 Awards

var awards = [
    { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
    { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
    { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
    { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
    { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];

// For Each

var result = '';

awards.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.awardTitle}</td>
            <td>${params.categoryGiven}</td>
            <td>${params.established}</td>
            <td>${params.awardCountry}</td>
            <td>${params.frequencyYears}</td>
        </tr>
    `;
});

document.getElementById('awardsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < awards.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${awards[i].awardTitle}</td>
            <td>${awards[i].categoryGiven}</td>
            <td>${awards[i].established}</td>
            <td>${awards[i].awardCountry}</td>
            <td>${awards[i].frequencyYears}</td>
        </tr>
    `;
}

document.getElementById('awardsInfo2').innerHTML = result;


// ==========================================================================================
// Task 31 Bridges

var bridges = [
    { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
    { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
    { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
    { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
    { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];

// For Each

var result = '';

bridges.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.bridgeLabel}</td>
            <td>${params.lengthMeters}</td>
            <td>${params.countryLocated}</td>
            <td>${params.builtYear}</td>
            <td>${params.materialMain}</td>
        </tr>
    `;
});

document.getElementById('bridgesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < bridges.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${bridges[i].bridgeLabel}</td>
            <td>${bridges[i].lengthMeters}</td>
            <td>${bridges[i].countryLocated}</td>
            <td>${bridges[i].builtYear}</td>
            <td>${bridges[i].materialMain}</td>
        </tr>
    `;
}

document.getElementById('bridgesInfo2').innerHTML = result;


// ==========================================================================================
// Task 32 Space Telescopes

var spaceTelescopes = [
    { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
    { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
    { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
    { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
    { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];

// For Each

var result = '';

spaceTelescopes.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.telescopeName}</td>
            <td>${params.launchYear}</td>
            <td>${params.primaryMirrorM}</td>
            <td>${params.operatorAgency}</td>
            <td>${params.missionStatus}</td>
        </tr>
    `;
});

document.getElementById('spaceTelescopesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < spaceTelescopes.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${spaceTelescopes[i].telescopeName}</td>
            <td>${spaceTelescopes[i].launchYear}</td>
            <td>${spaceTelescopes[i].primaryMirrorM}</td>
            <td>${spaceTelescopes[i].operatorAgency}</td>
            <td>${spaceTelescopes[i].missionStatus}</td>
        </tr>
    `;
}

document.getElementById('spaceTelescopesInfo2').innerHTML = result;

// ==========================================================================================
// Task 33 Fashion Brands

var fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];

// For Each

var result = '';

fashionBrands.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.brandLabel}</td>
            <td>${params.foundedYear}</td>
            <td>${params.originCountry}</td>
            <td>${params.productType}</td>
            <td>$${params.annualRevenueBillionUSD}B</td>
        </tr>
    `;
});

document.getElementById('fashionBrandsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < fashionBrands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${fashionBrands[i].brandLabel}</td>
            <td>${fashionBrands[i].foundedYear}</td>
            <td>${fashionBrands[i].originCountry}</td>
            <td>${fashionBrands[i].productType}</td>
            <td>$${fashionBrands[i].annualRevenueBillionUSD}B</td>
        </tr>
    `;
}

document.getElementById('fashionBrandsInfo2').innerHTML = result;

// ==========================================================================================
// Task 34 Musical Instruments

var musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];

// For Each

var result = '';

musicalInstrumentsPro.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.instrumentName}</td>
            <td>${params.categoryFamily}</td>
            <td>${params.rangeOctaves}</td>
            <td>${params.madeOf}</td>
            <td>${params.originCentury}</td>
        </tr>
    `;
});

document.getElementById('musicalInstrumentsInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < musicalInstrumentsPro.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${musicalInstrumentsPro[i].instrumentName}</td>
            <td>${musicalInstrumentsPro[i].categoryFamily}</td>
            <td>${musicalInstrumentsPro[i].rangeOctaves}</td>
            <td>${musicalInstrumentsPro[i].madeOf}</td>
            <td>${musicalInstrumentsPro[i].originCentury}</td>
        </tr>
    `;
}

document.getElementById('musicalInstrumentsInfo2').innerHTML = result;

// ==========================================================================================
// Task 35 Web Browsers

var webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];

// For Each

var result = '';

webBrowsers.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.browserName}</td>
            <td>${params.developerOrg}</td>
            <td>${params.firstReleaseYear}</td>
            <td>${params.engineUsed}</td>
            <td>${params.platformSupport}</td>
        </tr>
    `;
});

document.getElementById('webBrowsersInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < webBrowsers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${webBrowsers[i].browserName}</td>
            <td>${webBrowsers[i].developerOrg}</td>
            <td>${webBrowsers[i].firstReleaseYear}</td>
            <td>${webBrowsers[i].engineUsed}</td>
            <td>${webBrowsers[i].platformSupport}</td>
        </tr>
    `;
}

document.getElementById('webBrowsersInfo2').innerHTML = result;

// ==========================================================================================
// Task 36 Airlines

var airlines = [
  { airlineName: "Emirates", foundedYear: 1985, hubAirport: "Dubai International", fleetSize: 262, allianceMember: false },
  { airlineName: "Qatar Airways", foundedYear: 1993, hubAirport: "Hamad International", fleetSize: 237, allianceMember: false },
  { airlineName: "Singapore Airlines", foundedYear: 1947, hubAirport: "Changi Airport", fleetSize: 155, allianceMember: true },
  { airlineName: "Lufthansa", foundedYear: 1953, hubAirport: "Frankfurt Airport", fleetSize: 277, allianceMember: true },
  { airlineName: "Delta Air Lines", foundedYear: 1924, hubAirport: "Atlanta", fleetSize: 915, allianceMember: true }
];

// For Each

var result = '';

airlines.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.airlineName}</td>
            <td>${params.foundedYear}</td>
            <td>${params.hubAirport}</td>
            <td>${params.fleetSize}</td>
            <td>${params.allianceMember ? 'Yes' : 'No'}</td>
        </tr>
    `;
});

document.getElementById('airlinesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < airlines.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${airlines[i].airlineName}</td>
            <td>${airlines[i].foundedYear}</td>
            <td>${airlines[i].hubAirport}</td>
            <td>${airlines[i].fleetSize}</td>
            <td>${airlines[i].allianceMember ? 'Yes' : 'No'}</td>
        </tr>
    `;
}

document.getElementById('airlinesInfo2').innerHTML = result;

// ==========================================================================================
// Task 37 Volcanoes

var volcanoes = [
  { volcanoLabel: "Mauna Loa", heightMeters: 4169, lastEruptionYear: 2022, locationIsland: "Hawaii", volcanoType: "Shield" },
  { volcanoLabel: "Mount Etna", heightMeters: 3329, lastEruptionYear: 2021, locationIsland: "Sicily", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Krakatoa", heightMeters: 813, lastEruptionYear: 2018, locationIsland: "Indonesia", volcanoType: "Caldera" },
  { volcanoLabel: "Mount Fuji", heightMeters: 3776, lastEruptionYear: 1707, locationIsland: "Honshu", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Eyjafjallajökull", heightMeters: 1651, lastEruptionYear: 2010, locationIsland: "Iceland", volcanoType: "Stratovolcano" }
];

// For Each

var result = '';

volcanoes.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.volcanoLabel}</td>
            <td>${params.heightMeters}</td>
            <td>${params.lastEruptionYear}</td>
            <td>${params.locationIsland}</td>
            <td>${params.volcanoType}</td>
        </tr>
    `;
});

document.getElementById('volcanoesInfo').innerHTML = result;

// For loop

var result = '';

for (var i = 0; i < volcanoes.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${volcanoes[i].volcanoLabel}</td>
            <td>${volcanoes[i].heightMeters}</td>
            <td>${volcanoes[i].lastEruptionYear}</td>
            <td>${volcanoes[i].locationIsland}</td>
            <td>${volcanoes[i].volcanoType}</td>
        </tr>
    `;
}

document.getElementById('volcanoesInfo2').innerHTML = result;























