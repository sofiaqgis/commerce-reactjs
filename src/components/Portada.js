import portada2 from './IMG/portada3.jpg';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Comp.css';

function PortadaLogo() {
    return (
        <>
        <Row className="g-4">
           <Col >
        <Image src={portada2} width="99%" className="img-fuid rounded" alt="portada"></Image>
            </Col> 
        </Row>
       </>
         
    );
  }
  
  export default PortadaLogo;