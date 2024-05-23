// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();




// Weather app code 

let cname = document.getElementById("city_name");
let img = document.getElementById("img");
let input = document.getElementById("input");
let btn = document.getElementById("btn-search");
let type = document.getElementById("type");
let ctmp = document.getElementById("temp");
let weather_realfeel = document.getElementById("weather_realfeel");
let weather_humidity = document.getElementById("weather_humidity");
let weather_wind = document.getElementById("weather_wind");
let weather_pressure = document.getElementById("weather_pressure");


let mykeys = '37569aeb7c17baf73f3711dc72e76a55';


const data = async function (cityname) {

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${mykeys}&units=metric`)

    return await getData.json();
}

data();

btn.addEventListener("click", async () => {
    let value = input.value;
    let result = await data(value);
    cname.innerHTML = `${result.name} ${","} ${result.sys.country}`;
    type.innerHTML = result.weather[0].main;
    ctmp.innerHTML = `${Math.floor(result.main.temp)}${"&#176C"}`
	weather_realfeel.innerHTML = `${Math.floor(result.main.feels_like)} ${"&#176"}`
	weather_humidity.innerHTML = result.main.humidity + " %";
	weather_wind.innerHTML = result.wind.speed + " Km/h";
	weather_pressure.innerHTML = result.main.pressure + " hPa";



   /* const iconCode = result.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    img.src = iconUrl;*/

	if(type.innerHTML == "Clouds") {
		img.src = "./images/img/cloud.png";
	}

	if(type.innerHTML == "Clear") {
		img.src = "./images/img/clear.png"
	}

	else if(type.innerHTML == "Haze") {
		img.src = "./images/haze.svg"
	}

	else if(type.innerHTML == "Mist") {
		img.src = "./images/img/mist.png"
	}

	else if(type.innerHTML == "Rain") {
		img.src = "./images/img/rain.png"
	}

	else if(type.innerHTML == "Snow") {
		img.src = "./images/img/snow.png"
	}


})
 

