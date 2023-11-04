import { useEffect, useState } from "react"
import styled from "styled-components"

 const FooterContainer = ({className}) => {
    const [city, setCity] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weather, setWeather] = useState('')

    useEffect(() => {
        //fetch('https://api.openweathermap.org/data/3.0/onecall?q=Moscow&units=metric&;ang=ru&appid=77bb0020df4d43333ee8f2fbf6f05498')
        //        .then((res)=>console.log(res.json()))

                //.then(({name, temp, main})=>{
                //    //setCity(name);
                //    setTemperature(Math.round(temp));
                //    setWeather(weather[0].main);
                //})
    }, []);

    return (
        <div className={className}>
            <div>
                <div>Блог веб-разработчика</div>
                <div>web@developer.ru</div>
            </div>
            <div>
                <div>{city} {new Date().toLocaleString('ru',{day:'numeric', month:'long'})}</div>
                <div>{temperature} , градусов {weather}</div>
            </div>
        </div>
    )
}

export const Footer = styled(FooterContainer)`
    display:    flex;
    justify-content: space-between;
    line-items: center;
    width: 1000px;
    height: 120px;
    padding: 20px 40px;
    font-weight: bold;
    background-color: #fff;
    box-shadow: 0px 2px 17px #000;
    align-self: last baseline
`
