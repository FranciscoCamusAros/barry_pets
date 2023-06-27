import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import nicopets from '../assets/img/nicodog.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Etologia = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className='container_etologia'>
      <Row className='row_etologia'>
        <Col xs={12} xl={6}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className='pb-2'>
            <h2 className='text-center'>
              ¿En qué consiste mis sesiones de Etología?
            </h2>
          </div>
          <div>
            <p>
              Como etólogo, mis sesiones se enfocan en comprender y abordar el comportamiento animal.
              Trabajo junto a los dueños para <strong>identificar las causas de los problemas de comportamiento y proporcionar estrategias efectivas para abordarlos.</strong>
              <br /><br />
              Realizo evaluaciones detalladas, <strong>diseño planes de intervención personalizados</strong> y brindo asesoramiento sobre enriquecimiento ambiental y entrenamiento positivo.
              <br /><br />
              Mi objetivo es mejorar el bienestar de las mascotas y <strong>fortalecer la relación entre los animales y sus dueños</strong>.
              Cada sesión se adapta a las necesidades individuales y busca resultados positivos y duraderos.
            </p>
          </div>
        </Col>
        <Col xs={12} xl={6}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Card className='mb-4'>
            <Card.Img variant="top" src={nicopets} className='card_img_eto mt-4' />
            <Card.Body>
              <Card.Title>Primera Sesión Etología</Card.Title>
              <Card.Text>
                En la primera sesión, llevaría a cabo una evaluación exhaustiva del comportamiento de la mascota y trabajaríamos juntos para comprender el problema. Identificaríamos posibles causas y comenzaríamos a diseñar un plan de intervención personalizado.
                <hr />
                <div className='div_precio'>
                  $30.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='warning' 
              className='button_acces_correa' 
              href='https://hlr351vnvcv.typeform.com/to/ALrsJokD' 
              target='_blank' rel='noopenernoreferrer'>Contáctame</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Etologia