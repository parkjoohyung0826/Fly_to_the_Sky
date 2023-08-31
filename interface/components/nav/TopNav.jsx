import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDrowning } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";


const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  font-family: 'Outfit', sans-serif;
  color : #414F64;
`

const Box = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 18px;
    margin-top: 5px;
`

const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgb(62,42,140);
    margin-right: 10px;
`

const Icon = styled(FontAwesomeIcon)`
    color : white;
`

const InfoBox = styled.div`
    display: flex;
    align-items: center;
`

const InfoIcon = styled(FontAwesomeIcon)`
    color : #414F64;
    opacity: 0.6;
    font-size: 20px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    h6{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 2px;
    }
    p{
        margin-top: 2px;
        font-size: 14px;
        opacity: 0.7;
    }
`

function TopNav() {

    return (
        <Container>
            <Box>
                <IconDiv>
                    <Icon icon={faPersonDrowning}/>
                </IconDiv>
                <Title>
                    Fly To The Sky
                </Title>
            </Box>
            <InfoBox>
                <InfoIcon icon={faBell} />
                <Item>
                    <h6>Lee.H.S</h6>
                    <p>Safe Agent</p>
                </Item>
            </InfoBox>
        </Container>
    )
  }
  
  export default TopNav;