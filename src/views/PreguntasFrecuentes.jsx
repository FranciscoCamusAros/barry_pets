import { Accordion, Container } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function PreguntasFrecuentes() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container className="py-5 container_qa"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="py-5">
        <h2>Preguntas Frecuentes 🐕‍🦺🐈‍⬛ </h2>
      </div>
      <Accordion defaultActiveKey="" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué es la Etología?</Accordion.Header>
          <Accordion.Body>
            La etología es una rama de la biología y la psicología que se enfoca en el estudio del comportamiento animal en su ambiente natural. Esta disciplina busca comprender cómo los animales interactúan con su entorno, cómo se comunican, cómo se reproducen, cómo buscan alimento y cómo se adaptan a diferentes situaciones.
            La etología examina tanto el comportamiento innato (instintivo) como el aprendido, y se basa en observaciones sistemáticas y experimentos para obtener información sobre los patrones de comportamiento de diferentes especies. Los etólogos también investigan los factores evolutivos y genéticos que influyen en el comportamiento animal.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuánto tarda en cambiar de comportamiento mi mascota?</Accordion.Header>
          <Accordion.Body>
            El tiempo que tarda una mascota en cambiar su comportamiento con la ayuda de un etólogo puede variar considerablemente y depende de varios factores. Algunos de estos factores incluyen la naturaleza y gravedad del problema de comportamiento, la respuesta individual de la mascota, la consistencia y compromiso del propietario y el enfoque de tratamiento utilizado.
            En algunos casos, los cambios de comportamiento pueden ocurrir rápidamente, especialmente cuando se trata de comportamientos aprendidos o condicionados. Por ejemplo, ciertos problemas de comportamiento como saltar sobre las personas, morder muebles o hacer sus necesidades en lugares inapropiados pueden mejorar significativamente con un entrenamiento adecuado en un corto período de tiempo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿La atención es a domicilio?</Accordion.Header>
          <Accordion.Body>
            ¡Claro! Como etólogo, ofrezco servicios de atención a domicilio para brindar un enfoque más completo y personalizado en la evaluación y tratamiento del comportamiento de las mascotas. Al realizar las consultas en el hogar de los propietarios, puedo observar directamente el entorno en el que se desarrolla el comportamiento problemático y obtener una mejor comprensión de los factores contextuales que pueden estar contribuyendo a dicho comportamiento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿En qué comunas atiendo?</Accordion.Header>
          <Accordion.Body>
            Sí, ofrezco servicios de atención a domicilio en todas las comunas de Santiago. Sin embargo, es importante tener en cuenta que los valores pueden variar según la comuna debido a diferentes factores, como la distancia, el tiempo de desplazamiento y los costos asociados.
            <br />Para obtener información precisa sobre los valores específicos para tu comuna, te recomendaría que te pongas en contacto conmigo directamente. De esta manera, podré proporcionarte los detalles sobre los precios y cualquier consideración especial relacionada con tu ubicación.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default PreguntasFrecuentes;