//import '../css/Courts.css';
import CourtHeader from './CourtComponents/CourtHeader.js'
import CourtSection from './CourtComponents/CourtSection.js'
import braga from '../assets/braga.png';
import carriche from '../assets/carriche.png';
import chicago from '../assets/chicago.png';
import { Container } from 'react-bootstrap';

function Courts(props) {
    return (
      <div>
        <CourtHeader/>
        <CourtSection text1="CALCADA DE CARRICHE" text2="PORTUGAL" image={carriche}/>
        <CourtSection text1="CHICAGO, CHELAS" text2="PORTUGAL" image={chicago}/>
        <CourtSection text1="BRAGA" text2="PORTUGAL" image={braga}/>
      </div>
      
    );
  }
  
export default Courts;