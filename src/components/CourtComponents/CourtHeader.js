import CourtHeaderCss from '../../css/CourtHeader.module.css';
import { Container} from 'react-bootstrap';
import logo from '../../assets/hooperslogo.png'

function CourtHeader(props) {
    return (
      <Container fluid className={`pt-5 vh-100 ${CourtHeaderCss.background}`}>
        <div className={`rounded mx-auto d-block ${CourtHeaderCss.img}`}>
            <img src={logo} alt="logo"/>
        </div>

        <div className={CourtHeaderCss.divPosition}>
          <hr className={CourtHeaderCss.courthr1}/>
            <div className={`text-white h1 ${CourtHeaderCss.txtPosition}`}>
              <div>AMEIXOEIRA</div>
              <div className="mt-3">PORTUGAL</div>
            </div>
          <hr className={CourtHeaderCss.courthr2}/>
        </div>
      </Container>
    );
  }
  
export default CourtHeader;