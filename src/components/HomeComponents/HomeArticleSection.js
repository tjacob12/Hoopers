import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import HomeArticleCss from '../../css/HomeArticleSection.module.css';
import {Link} from 'react-router-dom'
import saraguerreiro from '../../assets/saraguerreiro.png'
import liz from '../../assets/liz.png'
import chelas from '../../assets/chelas.png'
import useInView from "react-cool-inview";
import LinkAndMenuCss from '../../css/LinkAndMenu.module.css';
import BurgerMenu from '../BurgerMenu.js'

function HomeArticleSection(props) {
    const { observe, inView } = useInView({
        // Track the actual visibility of the target
        trackVisibility: true,
        // Set a minimum delay between notifications, it must be set to 100 (ms) or greater
        // For performance perspective, use the largest tolerable value as much as possible
        delay: 100,
    });
  
    return (
        <Container ref={observe} fluid className="vh-100 p-5 hoopersBlack">
            <div className="mb-5">
              <div className={`${LinkAndMenuCss.SectionShopLink}`}>
                  SHOP |
              </div>

              <div className = {`${LinkAndMenuCss.SectionPTLink}`}>
                  PT
              </div>
            </div>

            <Row>
                <Col xs= {2} className={`${inView ? HomeArticleCss.slideLeft : "none"}`}><h1>Articles</h1></Col>
                <Col><hr className={`${HomeArticleCss.articlehr} ${inView ? HomeArticleCss.slideRight : "none"}`}/></Col>
            </Row>

            <Row className="p-2 h-100 no-gutters">
                <Col xs={1}></Col>
                <Col className="h-100">
                    <div className={`h-80 ${inView ? HomeArticleCss.slideUp : "none"}`}>
                        <img src={saraguerreiro} alt="img1"/>
                    </div>
                </Col>
                <Col className={`h-100 ${HomeArticleCss.padding-0} ${inView ? HomeArticleCss.slideUp2 : "none"}`}>
                    <div className={`h-80 ${HomeArticleCss.padding-0}`}>
                        <img src={chelas} alt="img1"/>
                    </div>
                    <div className="text-center mt-4">
                        <Link to={props.to}>
                            <Button className="mt-3 pr-3 pl-3 btnColor">{props.btnText}</Button>
                        </Link>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className={`h-80 ${inView ? HomeArticleCss.slideUp : "none"}`}>
                        <img src={liz} alt="img1"/>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <BurgerMenu/>
            {/* <Button variant="warning">more articles</Button>{' '} */}
        </Container>
    );
}
  
  export default HomeArticleSection;