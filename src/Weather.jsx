import { useState } from 'react';
import './weather.css'
import axios from "axios";

function Weather(){

    const [city,setcity] = useState("")

    const [weather,setweather]= useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")
    const [press,setpress] = useState("")
    const [hum,sethum] = useState("")
    const [loc,setloc] = useState("")
    const[deg,setdeg] = useState("")
    const [winds,setwinds] = useState("")

    

    function handlecity(evt){
        setcity(evt.target.value)
        console.log(city)
    }

    function getWeather(){
        let weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46bb61fb55f029a1b896d176b1aa5cd7`);

        weatherData.then(function(success){
            console.log(success);
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
            setpress(success.data.main.pressure)
            sethum(success.data.main.humidity)
            setloc(success.data.name)
            setdeg(success.data.clouds.all)
            setwinds(success.data.wind.speed)
        });
    }
    return( <>
<div className="weather-app">

      <div className="weather-container">

        {/* LEFT SECTION */}
        <div className="left-section">

          <div className="heading">
            <span className="weather-icon">☁️</span>

            <div>
              <h1>Weather Report</h1>
              <p>Get real-time weather updates for any city in the world.</p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="search-section">
            <input onChange={handlecity}
              type="text"
              placeholder="Enter your city name..."
            />

            <button onClick={getWeather}>
              Get Report
            </button>
          </div>

          {/* EMPTY WEATHER AREA */}
          <div className="empty-weather">

            <div className="empty-icon">☁️</div>

            <h3>Your weather information will appear here</h3>

            <p>
              Enter a city name and click "Get Report"
            </p>

          </div>

          <div className="footer">
            <span>⟳</span>
            <p>
              Real-time data Powered by
              <span className="api-name"><a href="https://openweathermap.org/api"> OpenWeatherMap</a></span>
            </p>
          </div>

        </div>


        {/* RIGHT SECTION */}
        <div className="right-section">

          <div className="overview-title">
           <span className="weatherimg">🌦️</span>
            <h2>Weather Overview</h2>
          </div>

          {/* MAIN WEATHER */}
          <div className="main-weather">
                  <h1>{loc}</h1>
            <div className="weather-display">
              <div className="big-weather-icon">🌤️</div>

              <div>
                <h1>{deg}°C</h1>
               
                
              </div>
            </div>

          </div>

          <div className="divider"></div>


          {/* WEATHER DETAILS */}
          <div className="weather-details">

            <div className="detail">
              <span className="detail-icon">☁️</span>

              <div>
                <p>Weather :</p>
                <h3>{weather}</h3>
              </div>
            </div>


            <div className="detail">
              <span className="detail-icon">🌡️</span>

              <div>
                <p>Temperature :</p>
                <h3>{temp}°C</h3>
              </div>
            </div>


            <div className="detail">
              <span className="detail-icon">💬</span>

              <div>
                <p>Description :</p>
                <h3>{desc}</h3>
              </div>
            </div>


            <div className="detail">
              <span className="detail-icon">◉</span>

              <div>
                <p>Pressure :</p>
                <h3>{press} hPa</h3>
              </div>
            </div>


            <div className="detail">
              <span className="detail-icon">💧</span>

              <div>
                <p>Humidity :</p>
                <h3>{hum}%</h3>
              </div>
            </div>

             <div className="detail">
              <span className="detail-icon">💨</span>

              <div>
                <p>Wind Speed :</p>
                <h3>{winds} m/s</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

    </>
    )
}

export default Weather;