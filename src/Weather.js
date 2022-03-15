import React from 'react'
import './styleNew.css'

export default function Weather({temp, main, city, country, wind, pressure, error}) {
  return (
      <div id='weather'>
      { city &&  
        <div id='weather__container'>
          <div id='left-part'>
            <p id='title__city'>{city}, {country}</p>
            {main[0].key === "Clouds" && 
              <p>Погода: Облачно</p>
            }
            {main[0].key === "Clear" && 
              <p>Погода: Солнечно</p>
            }
            {main[0].key === "Rain" && 
              <p>Погода: Дождь</p>
            }
            {main[0].key === "Mist" && 
              <p>Погода: Туман</p>
            }
            {main[0].key === "Drizzle" && 
              <p>Погода: Моросит</p>
            }
            {main[0].key === "Snow" && 
              <p>Погода: Снег</p>
            }
            {main[0].key === "Thunderstrom" && 
              <p>Погода: Ураган</p>
            }
            <p>Температура: {Math.round(temp)}°</p>
            <p>Ветер: {wind} м/с</p>
            <p>Давление: {Math.round(pressure / 1.33317)} мм рт. ст.</p>
          </div>
          <div id='right-part'>
          {main[0].key === "Clouds" &&
            <img src={require("./cloud.png")} alt="1" />
          }
          {main[0].key === "Clear" &&
              <img src={require("./sun.png")} alt="2" />
          }
          {main[0].key === "Rain" &&
            <img src={require("./rain.png")} alt="3" />
          }
          {main[0].key === "Mist" &&
            <img src={require("./mist.png")} alt="3" />
          }
          {main[0].key === "Drizzle" &&
            <img src={require("./drizzle.png")} alt="4" />
          }
          {main[0].key === "Snow" &&
            <img src={require("./snowflake.png")} alt="4" />
          }
          {main[0].key === "Thunderstrom" &&
            <img src={require("./thunderstorm.png")} alt="1" />
          }
          </div>
        </div>
      } 
      </div>
  )
}
