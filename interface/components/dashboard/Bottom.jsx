import styled from "styled-components";
import Weather from "./Weather";
import Dron from "./Dron";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color : #414F64;
  font-family: 'Outfit', sans-serif;
  padding: 25px;
  display: grid;
  grid-template-columns: 2.3fr 1fr;
  column-gap: 40px;
`

function Bottom() {

    return (
      <Container>
        <Weather />
        <Dron />
      </Container>
    )
  }
  
  export default Bottom;