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

function HomeArticleSection(props) {
    // console.log(props)
  
    return (
        <Container fluid className="vh-100 p-5 hoopersBlack">
            <Row>
                <Col xs= {2}><h1>articles</h1></Col>
                <Col><hr className={`${HomeArticleCss.articlehr}`}/></Col>
            </Row>

            <Row className="p-2 h-100 no-gutters">
                <Col xs={1}></Col>
                <Col className="h-100">
                    <div className="h-80">
                        <img src={saraguerreiro} alt="img1"/>
                    </div>
                </Col>
                <Col className={`h-100 ${HomeArticleCss.padding-0}`}>
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
                    <div className="h-80">
                        <img src={liz} alt="img1"/>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>

            {/* <Button variant="warning">more articles</Button>{' '} */}
        </Container>
    );
}
  
  export default HomeArticleSection;