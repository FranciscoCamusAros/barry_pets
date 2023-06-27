import { Card, Carousel, Button, Container, Row, Col, Form } from 'react-bootstrap';

import fondo_perro from '../assets/img/fondo_perro.jpg';
import fondo_alimento from '../assets/img/fondo_alimento.jpg';
import fondo_juego from '../assets/img/juegos_perro.jpg';
import fondo_entrenamineto from '../assets/img/entrenamiento_perro.jpg';
import correa from '../assets/img/correa.jpg';
import kong from '../assets/img/kong.jpg';
import barry from '../assets/img/nicopets.jpeg';


import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const irAEtologia = () => {
    navigate(`/etologia`);
  };

  const irAAccesorios = () => {
    navigate(`/accesorios`);
  };

  const irACorreas = () => {
    navigate(`/correas`);
  };

  return (
    <Container fluid>
      <section className='carousel_section'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img_carousel_principal"
              src={fondo_perro}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='h3_primer_slide'>Barry Pets</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img_carousel_principal"
              src={fondo_alimento}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className='h3_primer_slide'>Correas al mejor precio</h3>
              <Button variant="warning" size="lg" className='boton_carousel' onClick={ irACorreas }>¡Comprar Ahora!</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img_carousel_principal"
              src={fondo_juego}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='h3_primer_slide'>Accesorios para tu Mascota</h3>
              <Button variant="warning" size="lg" className='boton_carousel' onClick={ irAAccesorios }>¡Comprar Ahora!</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <Container fluid className='barra_envíos_home'>
        <h5 className='h5_barra_envios_home'>🚚 Hacemos envíos a todo Chile 🔵🔴⚪</h5>
      </Container>

      <Container className='productos_home py-5'
        data-aos="fade-up"
        data-aos-duration="1000"
        fluid
      >
        <div className='título_productos_home'>
          <h2>Nuestros Productos</h2>
        </div>
        <Row>
          <Col xs={12} md={6} xl={4}>
            <Card className='my-2'>
              <Card.Header><h5>Etología</h5></Card.Header>
              <Card.Img variant="top" src={fondo_entrenamineto} className='card_img_home' />
              <Card.Body>
                <Card.Title>Te ayudo a entender a tu mascota</Card.Title>
                <hr />
                <Card.Text>
                  La clave para abordar los problemas de comportamiento de tus mascotas.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-center'> 
                <Button variant="warning" className='boton_carousel' onClick={ irAEtologia }>Quiero saber más!</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card className='my-2'>
              <Card.Header><h5>Accesorios</h5></Card.Header>
              <Card.Img variant="top" src={kong} className='card_img_home' />
              <Card.Body>
                <Card.Title>Los mejores Kongs</Card.Title>
                <hr />
                <Card.Text>
                  Son útiles para enriquecer el entorno de los perros, dando estimulación mental y física.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Button variant="warning" className='boton_carousel' onClick={ irAAccesorios }>Ve nuestros Accesorios</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card className='my-2'>
              <Card.Header><h5>Correas</h5></Card.Header>
              <Card.Img variant="top" src={correa} className='card_img_home' />
              <Card.Body>
                <Card.Title>Diferentes tipos de Correa</Card.Title>
                <hr />
                <Card.Text>
                  Las correas largas ofrecen libertad y seguridad durante el paseo.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Button variant="warning" className='boton_carousel' onClick={ irACorreas }>Ve nuestras Correas</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid
      data-aos="fade-up"
      data-aos-duration="1000"
      >
        <Row>
          <Col xs={12} md={6} xl={6}>
            <h4>Acerca de Mí</h4>
            <hr />
            <Row>
              <Col xs={12} md={6} xl={8}>
                <div>
                  Hola, soy Nico, un apasionado veterinario de 27 años que ha amado a los animales desde que era niño. Me gradué en Veterinaria en la Universidad Mayor y luego amplié mis conocimientos con un <strong>diplomado en Etología</strong>.
                  <br /><br />
                  Actualmente, <strong>me especializo en el entrenamiento de perros y gatos</strong>. Tengo 3 perros: Cala, Danka y Benji. Mi objetivo es utilizar mis conocimientos para mejorar la calidad de vida de las mascotas y fortalecer el vínculo humano-animal a través del entrenamiento y el amor.
                </div>
              </Col>
              <Col xs={12} md={6} xl={4} className='text-center my-3'>
                <img src={barry} alt="" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '50%', objectFit: 'cover' }} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <h4>¡No te quedes sin Preguntar!</h4>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Francisco" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="francisco@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Déjanos tus preguntas o comentarios</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="dark" className='mb-4'>Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container >
  );
};

export default Home;