import { Container, Form, Button } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ handleToken }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credenciales, setCredenciales] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://barry-pets-backend.vercel.app/login', {
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
        console.log('Credenciales Ok');
        handleToken(true);
        navigate("/micuenta");
      } else {
        // Ocurrió un error en la solicitud
        console.error('No se han encontrado credenciales');
        setCredenciales(true);
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };


  return (
    <Container className="container_login">
      <div className="d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Form className="form_login" onSubmit={handleSubmit}>
          <h2 className="pb-4">Accede a tu Cuenta</h2>
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
            {credenciales ? <Form.Text style={{ color: 'red'}}>
              Usuario o contraseña incorrecta
            </Form.Text> : null}
          </Form.Group>
          <Button variant="success" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;