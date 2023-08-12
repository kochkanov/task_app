import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


const WeatherOfCity = ()=>{
  const [city, setCity]= useState("");
  const [weather, setWeather] = useState(null);

  const API_key = "b6fdf74d6b2bd090d0a9f5e98c4d2754";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_key}`;
  
  const showCityWeather = async()=>{
    try{
      const response = await axios.get(url);
      setWeather(response.data);
    }catch (error){
      console.log("Error");
    }
    setCity("");
  };
  return (
    <Container>

      
      <InWrap>
        <WrapperInput>
          <input type='text' placeholder="Search city" value={city} onChange={(e)=>setCity(e.target.value)} />
          <button onClick={showCityWeather}>search</button>
        </WrapperInput>
        {weather && (
          <WrapWeather>
            <p>{weather?.name} </p>
            <Temp>{weather?.main?.temp.toFixed()}°C</Temp>
            <p>{weather?.weather[0]?.description}
              <img
                src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
                alt={weather?.weather[0]?.description} /></p>
          </WrapWeather>
        )}

      </InWrap>

    </Container>

  );
};
export default WeatherOfCity;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
/* border:1px red solid; */
padding-bottom: 100px;


`;
const InWrap = styled.div`
  margin-top: 100px;
  
`;
const WrapperInput = styled.div`
justify-content:space-between;

> h2{
  font-size: 35px;
  font-family: 'Times New Roman', Times, serif;
}
> input{
  border-radius:10px;
  padding:4px 15px;
  padding-left: 8px;
  opacity: 0.3;
  border:none;
  font-size: 20px;
  color: #191515;
  /* border-color: #f1aa25; */
  ::placeholder{
    color: #e9970a;
    font: 100px;
    
  }
}
> button{
  margin-left: 20px;
  border-radius:10px;
  opacity: 0.3;
  padding:4px 15px;
  font-size: 20px;
  color: #191515;
  border: none;
}`;
const Temp = styled.span`
  font-size: 6rem;
  color:white;
  border:1px red;
`;

const WrapWeather = styled.div`
> p {
  font-size: 2rem;
  color: white;
}`;