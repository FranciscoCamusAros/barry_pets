import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import kong from '../assets/img/kong.jpg';
import dispensador from "../assets/img/dispensador.jpg";
import plato from '../assets/img/platos.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/my_context';

const Accesorios = () => {

  const { unidadKong, setKong, unidadPlato, setPlato, unidadDispensador, setDispensador } = useContext(MyContext);

  const navigate = useNavigate();

  const irACarro = () => {
    navigate(`/carrito`)
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className='container_accesorios_correas'>
      <Row className='row_accesorios_correas gy-4 pb-4'>
        <h2 className="text-center pb-4">Accesorios 🪀</h2>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={kong} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Kong</Card.Title>
              <Card.Text>
                Su diseño único y resistente permite rellenarlo con premios o alimentos,
                lo que mantiene a tu perro ocupado y estimula su mente
                <hr />
                <div className='div_precio'>
                  $7.500
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setKong(unidadKong + 1)}
              >
                Agregar al Carro {unidadKong > 0 ? unidadKong : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setKong(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={plato} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Plato</Card.Title>
              <Card.Text>
                El plato de alimentos para perro es un accesorio esencial para su alimentación.
                Este plato está diseñado pensando en la comodidad y seguridad de tu perro.
                <hr />
                <div className='div_precio'>
                  $10.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setPlato(unidadPlato + 1)}
              >
                Agregar al Carro {unidadPlato > 0 ? unidadPlato : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setPlato(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={dispensador} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Dispensador Agua</Card.Title>
              <Card.Text>
                El dispensador de agua es una solución práctica para asegurar que tu perro siempre tenga acceso a agua fresca, en los paseos.
                Este dispositivo se activa solo con un botón.
                <hr />
                <div className='div_precio'>
                  $6.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setDispensador(unidadDispensador + 1)}
              >
                Agregar al Carro {unidadDispensador > 0 ? unidadDispensador : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setDispensador(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Accesorios