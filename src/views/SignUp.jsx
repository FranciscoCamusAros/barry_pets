import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function SignUp() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className="container_login">
      <Row className="row_signup">
        <Col className="pb-5" sm={12} xl={6}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <Form>
              <h2 className="pb-3">¡Regístrate!</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
                <Form.Text className="text-muted">
                  No compartiremos tu correo con nadie
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button variant="success" type="submit">
                Registrarse
              </Button>
            </Form>
          </div>
        </Col>
        <Col sm={12} xl={6}
        data-aos="fade-up"
        data-aos-duration="1000"
        >
          <h2 className="pb-3">¿Por qué registrarse en BarryPets?</h2>
          <ul>
            <li>Seguimiento de compras</li>
            <li>Ofertas y descuentos exclusivos</li>
            <li>Novedades y lanzamientos de productos</li>
            <li>Programas de fidelidad y recompensas</li>
            <li>Información y consejos útiles</li>
            <li>Atención al cliente personalizada</li>
          </ul>
          <p>Únete a nosotros y experimenta una experiencia de compra única para consentir a tus adorables compañeros peludos.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;