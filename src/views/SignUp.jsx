import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const irALogIn = () => {
    navigate(`/login`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://barry-pets-backend.vercel.app/agregar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        // La solicitud se realizó correctamente
        console.log('Usuario agregado');
        setEmail('');
        setPassword('');
        setAlerta(true);
      } else {
        // Ocurrió un error en la solicitud
        console.error('Error al agregar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };

  return (
    <Container className="container_login">
      <Row className="row_signup">
        <Col className="pb-5" sm={12} xl={6}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <Form onSubmit={handleSubmit}>
              <h2 className="pb-3">¡Regístrate!</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                  No compartiremos tu correo con nadie
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="success" type="submit">
                Registrarse
              </Button>
            </Form>
          </div>
        </Col>
        {alerta && (
          <Col sm={12} xl={6}
            className="pb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Alert variant="success" onClose={() => setAlerta(false)} dismissible>
              <Alert.Heading>¡Felicitaciones te has registrado en BarryPets!</Alert.Heading>
              <p>
                Ahora solo queda ingresar a tu cuenta 🐈‍⬛ 🐕.
              </p>
              <hr />
              <Button variant='success' onClick={irALogIn}>Iniciar Sesión 🔒</Button>
            </Alert>
          </Col>
        )}
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