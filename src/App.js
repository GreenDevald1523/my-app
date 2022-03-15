import React from 'react';
import './App.css';
import { useState } from 'react';
import Weather from './Weather';
import { ScaleFade, Slide, SlideFade, Fade, Collapse, useDisclosure, Img} from '@chakra-ui/react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const apiKey = "61fe700eb5f3d63dc80b20db3ebdca01";
    const [weather, setWeather] = useState({
        temp: undefined,
        main: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        wind: undefined,
        error: undefined
    })
    const gettingWeather = async (e) => {
        e.preventDefault();
        const town = e.target.elements.city.value;
        if(town) {
            const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric&lang=ru`);
            const data = await apiUrl.json();
            setWeather(
                {   
                    temp: data.main.temp,
                    main: data.weather.map((e) => 
                        <span key={e.main}>{e.main}</span>),
                    city: data.name,  
                    pressure: data.main.pressure,  
                    country: data.sys.country,
                    wind: data.wind.speed,
                    error: ""
                }
            )
        }
    }

    const theme1 = createTheme({
    status: {
        danger: '#1a9acc',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
    });

    const theme2 = createTheme({
        status: {
            danger: '#ff8989',
        },
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
        });

    return (
        <div className='App'>
            <div id='form'>
                <form onSubmit={gettingWeather}>
                    <input type="text" name="city" placeholder="Страна/город" />
                    <ThemeProvider theme={theme1}>
                        <Button onClick={onOpen} variant="contained" color="primary" type="submit">
                            Показать погоду 
                        </Button>
                    </ThemeProvider>
                    <ThemeProvider theme={theme2}>
                        <Button onClick={onClose} variant="contained" color="error">
                            Скрыть
                        </Button>
                    </ThemeProvider>
                </form>
            </div>
            <Collapse animateOpacity in={isOpen}>
                <Weather 
                    temp={weather.temp}
                    main={weather.main}
                    city={weather.city}
                    country={weather.country}
                    pressure={weather.pressure}
                    wind={weather.wind}
                    error={weather.error}
                />
            </Collapse>
        </div>
    )
}
