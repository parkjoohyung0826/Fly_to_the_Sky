import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faB, faC, faD } from "@fortawesome/free-solid-svg-icons";

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


function Cctv() {

    return (
      <Container>
        <Title>Cctv</Title>
        <Content>
            {/* Part A */}
            <Box>
                <Head>
                    <IconBox bgColor="rgb(62,42,140)">
                        <Icon icon={faA}/>
                    </IconBox>
                    <Status textColor="rgb(62,42,140)">
                        20% (Good)
                    </Status>
                </Head>
                <Footer>
                    <h1>Part A</h1>
                    <h6>section : 0km~2km</h6>
                </Footer>
            </Box>

            {/* Part B */}
            <Box>
            <Head>
                <IconBox bgColor="rgb(252,179,72)">
                    <Icon icon={faB}/>
                </IconBox>
                <Status textColor="rgb(252,179,72)">
                    0% (Great)
                </Status>
                </Head>
                <Footer>
                    <h1>Part B</h1>
                    <h6>section : 2km~3.5km</h6>
                </Footer>
            </Box>

            {/* Part C */}
            <Box>
            <Head>
                <IconBox bgColor="rgb(83,90,255)">
                    <Icon icon={faC}/>
                </IconBox>
                <Status textColor="rgb(83,90,255)">
                    40% (fine)
                </Status>
                </Head>
                <Footer>
                    <h1>Part C</h1>
                    <h6>section : 3.5km~5km</h6>
                </Footer>
            </Box>

            {/* Part D */}
            <Box>
            <Head>
                <IconBox bgColor="rgb(80,212,219)">
                    <Icon icon={faD}/>
                </IconBox>
                <Status textColor="rgb(80,212,219)">
                    20% (Good)
                </Status>
                </Head>
                <Footer>
                    <h1>Part D</h1>
                    <h6>section : 5km~7km</h6>
                </Footer>
            </Box>

        </Content>
      </Container>
    )
  }
  
  export default Cctv;