import styled from "styled-components";

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
`

function Weather() {

    return (
      <Container>
        <Title>Weather</Title>
        <Content>

        </Content>
        
      </Container>
    )
  }
  
  export default Weather;