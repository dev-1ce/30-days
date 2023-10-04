const apikey = "918baa86027a20e9bde05333e399ff9e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon")
async function checkweather(city){
    const response  = await fetch(apiurl + city +  `&appid=${apikey} `);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "images/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weather_icon.src = "images/clear.png";
        }
        if(data.weather[0].main == "Rain"){
            weather_icon.src = "images/rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "images/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weather_icon.src = "images/mist.png";
        }
        if(data.weather[0].main == "Snow"){
            weather_icon.src = "images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    

}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
