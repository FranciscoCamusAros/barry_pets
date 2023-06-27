import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import correa from '../assets/img/correa.jpg';
import correa1 from "../assets/img/correa1.jpg";
import correa2 from '../assets/img/correa2.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/my_context';

const Correas = () => {

  const { correaUno, setCorreaUno, correaDos, setCorreaDos, correaTres, setCorreaTres } = useContext(MyContext);

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
        <h2 className="text-center pb-4">Correas 🐕‍🦺</h2>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={correa} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Correa Pop</Card.Title>
              <Card.Text>
                La correa de 1 metro es ideal para mantener a tu perro cerca mientras pasea.
                Tiene un diseño perfecto para ustedes.
                <hr />
                <div className='div_precio'>
                  $10.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setCorreaUno(correaUno + 1)}
              >
                Agregar al Carro {correaUno > 0 ? correaUno : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setCorreaUno(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={correa1} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Correa larga 3 metros</Card.Title>
              <Card.Text>
                La correa de 3 metros brinda a tu perro un poco más de libertad para explorar durante los paseos.
                <hr />
                <div className='div_precio'>
                  $12.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setCorreaDos(correaDos + 1)}
              >
                Agregar al Carro {correaDos > 0 ? correaDos : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setCorreaDos(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card>
            <Card.Img variant="top" src={correa2} className='card_img_acce_correa' />
            <Card.Body>
              <Card.Title>Correa larga 4 metros</Card.Title>
              <Card.Text>
                La correa de 4 metros ofrece una mayor libertad y movimiento para tu perro durante los paseos.
                <hr />
                <div className='div_precio'>
                  $15.000
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='dark'
                className='button_acces_correa'
                onClick={e => setCorreaTres(correaTres + 1)}
              >
                Agregar al Carro {correaTres > 0 ? correaTres : ''}
              </Button>
              {' '}
              <Button variant='success' onClick={irACarro}>Pagar 🐕‍🦺</Button>
              {' '}
              <Button variant='danger'
                onClick={e => setCorreaTres(0)}
              >x</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Correas;