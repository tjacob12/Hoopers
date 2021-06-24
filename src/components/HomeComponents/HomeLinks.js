import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import HomeLinksCss from '../../css/HomeLinks.module.css';

function HomeLinks(props) {
    return (
        <div className={`${HomeLinksCss.Links}`}>
            SHOP | PT
        </div>
    );
}
  
export default HomeLinks;