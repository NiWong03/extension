const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
  ];
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const centerElement = document.querySelector("temperature-description p")

const weather = {
    // city = String,
    // temperature = String,
    // value = String,
    // description = String,
    // country = String,

};
weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
    else{
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}''

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}


    let tempMeasure = localStorage.getItem("tempMeasure");
    if(tempMeasure ==  "celsius"){
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
    else{
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
    }
temp.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        localStorage.setItem("tempMeasure","Fahrenheit");
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
        localStorage.setItem("tempMeasure", "celsius")
    }
});
function myFunction() {
    var x = document.getElementById("yt");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log("penis")
    } else {
      x.style.display = "none";
    }
}



var x = document.getElementById("myDiv");
  var chb = document.getElementsByClassName('toggle__input');
  function func(){
      
      if(chb[0].checked){
      {
            console.log("penis")
            localStorage.setItem("toggle__input",true);
          } 
      }
      if(!chb[0].checked)
      {
          console.log("sum")
          
      }
    }

function load(){
    var checked = JSON.parse(localStorage.getItem('toggle__input'));
if (checked == true) {
    document.getElementsByClassName("toggle__input").checked = checked;
    console.log("ppenis");
}
}
  


// window.addEventListener('load', (event) => {
//   if(localStorage.getItem('checkedStatus')=="true"){
//     document.body.classList.add("true"); 
//     document.getElementById('chk').checked = true;
//   }
// });

let hide = localStorage.getItem("hide");
const widgets = document.querySelector("#widgetsOpt");

const enableHide = ()=>{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    localStorage.setItem("hide", "on");
}


const disableHide = ()=>{
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    localStorage.setItem("hide", "off");

}

if(hide === "on"){
    enableHide()
    console.log("cock")
}

widgets.addEventListener('click',()=>{
    hide = localStorage.getItem("hide");
    if(hide !== "on"){
        enableHide();
    }
    else{
        disableHide();
    }
})
//---------video hide------

let vid = localStorage.getItem("vid");
const videoHide = document.querySelector("#video");

const enableHideVid = ()=>{
    var x = document.getElementById("yt");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    localStorage.setItem("vid", "on");
}


const disableHideVid = ()=>{
    var x = document.getElementById("yt");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    localStorage.setItem("vid", "off");

}

if(vid === "on"){
    enableHideVid()
}

videoHide.addEventListener('click',()=>{
    vid = localStorage.getItem("vid");
    if(vid !== "on"){
        enableHideVid();
    }
    else{
        disableHideVid();
    }
})

console.log(weatherapi)