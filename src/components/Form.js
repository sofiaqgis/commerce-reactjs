import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, setDoc, doc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from './utils/FirebaseConfig';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function FormCreateOrder() {


    const customOrder = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dir, setDir] = useState('');

    const clear = () => {
      setNombre('');
      setEmail('');
      setPhone('');
      setDir('');

  }


    const createOrder = async () => {

      let itemsForDB = customOrder.itemsCart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      }) )

      let order = {
        buyer: {
          name: nombre,
          email: email,
          phone: phone,
          direction: dir
        },

        date: serverTimestamp(),
        items: itemsForDB,
        total: customOrder.totalfinal
      
      }

      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);

      Swal.fire({
      title: 'Su orden fue creada con el número de pedido:   ',
      text:  newOrderRef.id, 
      color: '#fff'
       
    })

      itemsForDB.map( async (item) => {

        const itemRef = doc(db, "products", item.id);

        await updateDoc(itemRef, {
        stock: increment(-item.quantity)
});

      }
        )

      customOrder.clear();
      clear();
      

    }


  return (
    <Row className="centrar">
        
        <Card  style={{ width: '35rem', margin: '2rem', border: 'transparent' }}>
    <Form name='form'>
        <Form.Group>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="username" value={nombre} onChange={(ev)=> setNombre(ev.target.value)} placeholder="Ingrese su nombre y apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(ev)=> setEmail(ev.target.value)} placeholder="Ingrese su correo electrónico" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="number" value={phone} onChange={(ev)=> setPhone(ev.target.value)} placeholder="Ingrese su teléfono móvil sin guiones" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDir">
        <Form.Label>Dirección de envío</Form.Label>
        <Form.Control type="text" name="dir" value={dir} onChange={(ev)=> setDir(ev.target.value)} placeholder="Ingrese su dirección con calle, número, localidad, CP, (departamento)" />
        </Form.Group>
        <Form.Text className="text-muted">
          Su información personal se encuentra protegida.
        </Form.Text>
      </Form.Group>

      <Button onClick={createOrder} className="e23" variant="outline-dark">
        Enviar
      </Button>
    </Form>
    </Card>
  
    </Row>
  );
}

export default FormCreateOrder;