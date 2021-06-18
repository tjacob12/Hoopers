import CourtSectionCss from '../../css/CourtSection.module.css';
import { Container} from 'react-bootstrap';

function CourtSection(props) {
    return (
      <Container fluid className={`pt-5 pb-2 ${CourtSectionCss.background}`} style={{backgroundImage:`url(${props.image})`}}>
        <div className={CourtSectionCss.divPosition}>
          <hr className={CourtSectionCss.courthr1}/>
            <div className={`text-white h1 ${CourtSectionCss.txtPosition}`}>
              <div>{props.text1}</div>
              <div className="mt-3">{props.text2}</div>
            </div>
          <hr className={CourtSectionCss.courthr2}/>
        </div>
      </Container>
    );
  }
  
export default CourtSection;