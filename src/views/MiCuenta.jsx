import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import salchi from '../assets/img/salchi.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MiCuenta = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className='container_etologia'>
      <Row className='row_etologia'>
        <Col xs={12} xl={12}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className='pb-2'>
            <h2 className='text-center'>
              Mi cuenta
            </h2>
          </div>
          <div className='text-center'>
            <p>
              Bienvenido a tu cuenta de BarryPets
            </p>
          </div>
          <Card className='mb-4'>
            <Card.Body className='text-center'>
              <Card.Title className='text-center'><h2>Estamos en Mantenimiento 🔩</h2></Card.Title>
              <h5>Perdón los incovenientes</h5>
              <div className='text-center'>
                <Card.Img variant="top" src={salchi} style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='warning'
                className='button_acces_correa'
                href='https://hlr351vnvcv.typeform.com/to/ALrsJokD'
                target='_blank' rel='noopenernoreferrer'>Contáctame</Button>
              {' '}
              <Button variant='danger' href='/'>Salir</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MiCuenta;