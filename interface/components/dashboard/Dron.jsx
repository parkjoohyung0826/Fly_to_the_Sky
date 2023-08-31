import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleExclamation, faPlaneCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import drownVideo from "../img/example.mp4"


const Container = styled.div`
  width: 100%;
  height: 100%;
  color : #414F64;
  font-family: 'Outfit', sans-serif;
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const Content = styled(Swiper)`
    background-color: white;
    margin-top: 20px;
    height: 85%;
    border-radius: 15px;
    width: 450px;
`

const Item = styled(SwiperSlide)`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1{
        font-size: 32px;
        font-weight: 600;
    }
    div{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #414F64;
    }
    h3{
        font-size: 22px;
        font-weight: 600;
    }
    button{
        border: none;
        background-color: #414F64;
        color : white;
        opacity: 0.3;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
    }
`

const Icon = styled(FontAwesomeIcon)`
    color :${props => props.textColor};
    font-size: 32px;
`

const Item2 = styled(SwiperSlide)`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #414F64;;
    color: white;
    h1{
        font-size: 32px;
        font-weight: 600;
    }
    div{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    h3{
        font-size: 22px;
        font-weight: 600;
    }
    button{
        cursor: pointer;
        border: none;
        background-color: white;
        color : #414F64;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
    }
`

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
`;


const VideoContent = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 80vw;
    height: 80vh;
    position: relative;
    display: grid;
    grid-template-columns: 2.5fr 1fr;
`

const Xmark = styled(FontAwesomeIcon)`
    position: absolute;
    right: 20px;
    top : 20px;
    font-size: 32px;
    cursor: pointer;
    color : #414F64;
`

const Show = styled.video`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    div{
        margin-top: 10px;
    }
`


function Dron() {
    const [clicked, setClicked] = useState(false);

    return (
      <>
      <Container>
        <Title>Dron</Title>
        <Content
            pagination={{ dynamicBullets: true,}} spaceBetween={20} modules={[Autoplay, Pagination ]}
            //autoplay={{ delay: 10000, disableOnInteraction: false}}
            className="mySwiper" 
        >
                {/* Dron1 */}
                <Item>
                    <h1>Dron 1</h1>
                    <div>
                        <Icon textColor="white" icon={faHouseCircleExclamation} />
                    </div>
                    <h3>Not Active</h3>
                    <button>view</button>
                </Item>

                {/* Dron2 */}
                <Item2>
                    <h1>Dron 2</h1>
                    <div>
                        <Icon textColor="#414F64" icon={faPlaneCircleExclamation} />
                    </div>
                    <h3>Active</h3>
                    <button onClick={()=>setClicked(true)}>view</button>
                </Item2>
        </Content>
      </Container>

      {/* 모달창 */}
      <AnimatePresence>
          {clicked ? 
            <Overlay 
              initial={{ opacity : 0}}
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
                <VideoContent>
                    <Xmark icon={faCircleXmark} onClick={()=>setClicked(false)}/>
                    <Show src={drownVideo} controls autoplay loop />
                    <Info>
                        <h1>Detection</h1>
                        <div>Boat : 3</div>
                        <div>People : 3</div>
                        <div>Warning : 3</div>
                    </Info>
                </VideoContent>
            </Overlay> 
            :
            null}
        </AnimatePresence>
      </>
    )
  }
  
  export default Dron;