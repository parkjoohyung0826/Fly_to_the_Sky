import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChalkboard, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 10vh;
  height: 90vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
`

const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  div{
    font-size: 17px;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    color: #414F64;
    opacity: 0.6;
  }
  div:first-child{
    border-right: 3px solid rgb(62,42,140);
    color:rgb(62,42,140);
    opacity: 1;
  }
  p{
    margin-left: 12px;
    margin-top: 3px;
  }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`

const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  color: #414F64;
  margin-bottom: 150px;
  h1{
    opacity: 0.4;
    font-weight: 600;
    margin-bottom: 30px;
  }
  div{
    font-size: 17px;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    opacity: 0.6;
  }
  p{
    margin-left: 12px;
    margin-top: 3px;
  }
`

function LeftNav() {

    return (
      <Container>
        <TopMenu>
            <div>
                <Icon icon={faChalkboard}/>
                <p>Dashboard</p>
            </div>
            <div>
                <Icon icon={faEnvelopeOpen}/>
                <p>Home</p>
            </div>
            <div>
                <Icon icon={faChartLine}/>
                <p>Report</p>
            </div>
        </TopMenu>
        <BottomMenu>
            <hr/>
            <h1>HELP</h1>
            <div>
                <Icon icon={faGear}/>
                <p>Setting</p>
            </div>
            <div>
                <Icon icon={faArrowRightFromBracket}/>
                <p>Log out</p>
            </div>
        </BottomMenu>
      </Container>
    )
  }
  
  export default LeftNav;