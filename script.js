require("dotenv").config();
const API_KEY = process.env.API_KEY;

const search = document.querySelector("#search");
const input = document.querySelector("#input");
const location = document.querySelector("#location");
const temperature = document.querySelector("#temperature");

// fetch from openweather api

search.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      location.innerHTML = data.name;
      temperature.innerHTML = data.main.temp;
      appendData(data);
    });
});

// append data to the DOM

function appendData(data) {
  let main = document.getElementById("myData");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = "Name: " + data[i].name + " " + data[i].main.temp;
    main.appendChild(div);
  }
}
