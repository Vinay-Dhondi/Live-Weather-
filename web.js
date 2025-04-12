 const apiKey = "99951d2eac54dca3debebd3cb1d4ad08";
 const  apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const icon = document.querySelector(".icon");
let weather = document.querySelector(".weather");
const errorCity = document.querySelector(".errorCity");

 async function checkWeather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`)
    const data = await response.json();
    console.log (data);

    if (response.status == 404) {
      weather.style.display ="none"
      errorCity.style.display = "block"
    } else {
      document.querySelector(".name").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
      document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main =="Clouds") {
      icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    } else if (data.weather[0].main =="Clear"){
      icon.innerHTML = '<i class="fa-solid fa-sun"></i>'
    } else if (data.weather[0].main =="Rain"){
      icon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
    } else if (data.weather[0].main =="Snow"){
      icon.innerHTML = '<i class="fa-solid fa-snowflake"></i>'
    } else if (data.weather[0].main =="Thunderstorm"){
      icon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>'
    } else {
      icon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
    }
    
      errorCity.style.display = "none"
      weather.style.display = "block"; 
  }

    
 }

 searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
})