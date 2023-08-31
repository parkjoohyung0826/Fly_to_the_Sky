import styled from "styled-components";
import { useEffect, useState } from "react";
import { API } from "../../src/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella, faWind, faCloud } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const Content = styled.div`
    background-color: white;
    margin-top: 20px;
    height: 85%;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    padding: 30px 0px;
    color : #414F64;
    font-family: 'Outfit', sans-serif;
`

const Today = styled.div`
  border-right: 2px solid #414F64;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
`

const FourDay = styled.div`
  padding: 0px 30px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  width: 100%;
  height: 100%;
`

const Head = styled.div`
  h1{
    font-size: 20px;
    font-weight: 800;
  }
  h6{
    margin-top: 5px;
    font-weight: 600;
  }
`

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: -10px;
    width: 80px;
    height: auto;
    margin-bottom: 2px;
  }
  h1{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 2px;
  }
  h6{
    font-size: 12px;
    opacity: 0.6;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h6{
    margin-top: 10px;
    opacity: 0.6;
    font-size: 12px;
  }
  h1{
    margin-top: 1px;
  }
`

const Icon = styled(FontAwesomeIcon)`

`

const SmallIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  margin-right: 7px;
`

const FourDayItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p{

  }
  img{
    width: 60px;
  }
`

const DayInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
  }
`

function Weather() {
    const [todayData, setTodayData] = useState(null);
    const [fourDay, setFourDay] = useState([]);
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

    const getData = async(position) => {
      const lat = 35.1594965345398;
      //position.coords.latitude;
      const lng = 129.162576586723;
      //position.coords.longitude;
      const API_KEY = "0c868df8f751f360e8499d3e947744c0"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
      try{
        const data = await API.get(url)
        setTodayData(data.data)
      }catch(e){
          console.log(e)
      }
    }

    const getData2 = async(position) => {
      const lat = 35.1594965345398;
      //position.coords.latitude;
      const lng = 129.162576586723;
      //position.coords.longitude;
      const API_KEY = "0c322636d643c9f690f4519ee4798e80"
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
      try{
        const data = await API.get(url)
        const dayList = data.data.list.filter((num, index, arr)=> (index % 8 === 7) && (index !== 7))
        setFourDay([...dayList]);
        console.log([...dayList])
      }catch(e){
          console.log(e)
      }
    }
    const onGeoError = () => {
      console.log("no position")
    }

    useEffect(()=>{
      //navigator.geolocation.getCurrentPosition(getData, onGeoError);
      getData();
      getData2();
    },[])

    return (
      <Container>
        <Title>Weather</Title>
        <Content>
          <Today>
            <Head>
              <h1>{todayData?.name}</h1>
              <h6>{week[new Date().getDay()]} {new Date().getHours()}:{new Date().getMinutes()}</h6>
            </Head>
            <Middle>
                <img src={`https://openweathermap.org/img/wn/${todayData?.weather[0].icon}@2x.png`}/>
                <h1>{todayData?.main.temp}&#x2103;</h1>
                <h6>{todayData?.weather[0].description}</h6>
            </Middle>
            <Footer>
                <FooterItem>
                  <Icon icon={faUmbrella}/>
                  <h6>RAIN</h6>
                  <h1>{todayData?.rain ? todayData?.rain["1h"]: "0"}mm</h1>
                </FooterItem>
                <FooterItem>
                  <Icon icon={faWind}/>
                  <h6>WIND</h6>
                  <h1>{todayData?.wind.speed}m/s</h1>
                </FooterItem>
                <FooterItem>
                  <Icon icon={faCloud}/>
                  <h6>ATM</h6>
                  <h1>{todayData?.main.sea_level}hPa</h1>
                </FooterItem>
            </Footer>
          </Today>
          <FourDay>
            {fourDay.map((i,prev) => (
              <FourDayItem key={prev}>
                <p>{i?.dt_txt.substr(5,6)}</p>
                <img src={`https://openweathermap.org/img/wn/${i?.weather[0].icon}@2x.png`}/>
                <h6>{i?.weather[0].description}</h6>
                <DayInfo>
                  <div>
                    <SmallIcon icon={faUmbrella}/>
                    <p>{i?.rain ? i?.rain["3h"] : "0"}mm</p>
                  </div>
                  <div>
                    <SmallIcon icon={faWind}/>
                    <p>{i?.wind.speed}m/s</p>
                  </div>
                </DayInfo>
              </FourDayItem>
            ))}
          </FourDay>
        </Content>
        
      </Container>
    )
  }
  
  export default Weather;