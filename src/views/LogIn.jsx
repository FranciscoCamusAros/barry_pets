import { Container, Form, Button } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Login() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className="container_login">
      <div className="d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Form className="form_login">
          <h2 className="pb-4">Accede a tu Cuenta</h2>
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
    </Container>
  );
};

export default Login;