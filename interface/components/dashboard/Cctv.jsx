import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faB, faC, faD } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import first from "../img/1.jpeg";
import second from "../img/2.jpeg";
import third from "../img/3.jpeg";
import fourth from "../img/4.jpeg";


const Container = styled.div`
  width: 100%;
  height: 100%;
  color : #414F64;
  font-family: 'Outfit', sans-serif;
  padding: 25px;
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const Content = styled.div`
    display: grid;
	grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    margin-top: 20px;
    height: 75%;
`

const Box = styled.div`
    cursor: pointer;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    justify-content: space-around;
`

const IconBox = styled.div`
  background-color :${props => props.bgColor};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
    color:white;
    font-size: 24px;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Status = styled.h1`
    color :${props => props.textColor};
    font-size: 22px;
    font-weight: 600;
    margin-top: 7px;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: -10px;
    h1{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 5px;
    }
    h6{
        opacity: 0.6;
        font-size: 14px;
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
    font-family: 'Outfit', sans-serif;
    color : #414F64;
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


const Show = styled.img`
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


function Cctv() {
    const [clicked, setClicked] = useState(false);
    const [what, setWhat] = useState(null);

    return (
      <>
      <Container>
        <Title>Cctv</Title>
        <Content>
            {/* Part A */}
            <Box onClick={()=>{
                setWhat(0);
                setClicked(true);
            }}>
                <Head>
                    <IconBox bgColor="rgb(62,42,140)">
                        <Icon icon={faA}/>
                    </IconBox>
                    <Status textColor="rgb(62,42,140)">
                        40% (Fine)
                    </Status>
                </Head>
                <Footer>
                    <h1>Part A</h1>
                    <h6>section : 0km~2km</h6>
                </Footer>
            </Box>

            {/* Part B */}
            <Box onClick={()=>{
                setClicked(true);
                setWhat(1);
            }}>
            <Head>
                <IconBox bgColor="rgb(252,179,72)">
                    <Icon icon={faB}/>
                </IconBox>
                <Status textColor="rgb(252,179,72)">
                    80% (Worse)
                </Status>
                </Head>
                <Footer>
                    <h1>Part B</h1>
                    <h6>section : 2km~3.5km</h6>
                </Footer>
            </Box>

            {/* Part C */}
            <Box onClick={()=>{
                setClicked(true);
                setWhat(2);
            }}>
            <Head>
                <IconBox bgColor="rgb(83,90,255)">
                    <Icon icon={faC}/>
                </IconBox>
                <Status textColor="rgb(83,90,255)">
                    60% (Bad)
                </Status>
                </Head>
                <Footer>
                    <h1>Part C</h1>
                    <h6>section : 3.5km~5km</h6>
                </Footer>
            </Box>

            {/* Part D */}
            <Box onClick={()=>{
                setClicked(true);
                setWhat(3);
            }}>
            <Head>
                <IconBox bgColor="rgb(80,212,219)">
                    <Icon icon={faD}/>
                </IconBox>
                <Status textColor="rgb(80,212,219)">
                    40% (Fine)
                </Status>
                </Head>
                <Footer>
                    <h1>Part D</h1>
                    <h6>section : 5km~7km</h6>
                </Footer>
            </Box>

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
                    <Show src={what === 0 ? first : what === 1 ? second : what === 2 ? third : fourth}/>
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
  
  export default Cctv;