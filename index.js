var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;


let apiKey = "3ac0d8db34de82819d13a9167239acc1";
let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");


let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $(".weatherIcon");
let searchHistoryEl = $(".historyItems");

let tempEl = $(".temp");
let humidityEl = $(".humidity");
let windSpeedEl = $(".windSpeed");
let uvIndexEl = $(".uvIndex");
let cardRow = $(".card-row");
