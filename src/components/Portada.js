import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Comp.css';

function PortadaLogo() {


    return (
        <>
        <Row className="g-4">
         <Col><Image width="100%" src="https://firebasestorage.googleapis.com/v0/b/clonas-shop.appspot.com/o/IMG%2Fportada3.jpg?alt=media&token=288d13e5-1934-43b6-8e49-0c13cfd4d13c"></Image> </Col> 
        </Row>
       </>
         
    );
  }
  
  export default PortadaLogo;