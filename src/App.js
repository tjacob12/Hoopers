import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';

function App(props) {
  console.log(props)

  return (
    <Container fluid className="vh-100 p-5 hoopersBlack">
      <Row>
        <Col xs={8}><hr/></Col>
        <Col></Col>
        <Col><h1>{props.heading}</h1></Col>
        <Col></Col>
      </Row>
      
      <Row className="p-2 h-100">
        <Col xs={1}></Col>
        <Col xs={5} className="h-100">
          <div className="bg-primary h-100">
            <img src={props.img} alt="img1"/>
          </div>
        </Col>
        <Col className="d-flex align-items-center">
          <div className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br/>
            <Button className="mt-3 pr-3 pl-3 btnColor">{props.btnText}</Button>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

export default App;
