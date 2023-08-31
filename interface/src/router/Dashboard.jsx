import styled from "styled-components";
import Cctv from "../../components/dashboard/Cctv";
import Bottom from "../../components/dashboard/Bottom";



const Container = styled.div`
  background-color: rgb(242,244,249);
  width: 100%;
  height: 100%;
  padding: 15px;
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  border-top-left-radius: 15px;
`


function Dashboard() {

    return (
        <Container>
            <Cctv />
            <Bottom />
        </Container>
    )
  }
  
  export default Dashboard;