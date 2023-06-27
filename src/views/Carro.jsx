import { Container, Card, Button } from "react-bootstrap";

import { useContext, useState, useEffect } from 'react';
import MyContext from '../context/my_context';
import { useNavigate } from "react-router-dom";

import correa from '../assets/img/correa.jpg';
import correa1 from "../assets/img/correa1.jpg";
import correa2 from '../assets/img/correa2.jpg';
import kong from '../assets/img/kong.jpg';
import dispensador from "../assets/img/dispensador.jpg";
import plato from '../assets/img/platos.jpg';


function Carro() {

  const navigate = useNavigate();
  const { correaUno, setCorreaUno, correaDos, setCorreaDos, correaTres, setCorreaTres, unidadKong, setKong, unidadPlato, setPlato, unidadDispensador, setDispensador } = useContext(MyContext);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = (correaUno * 10000) + (correaDos * 12000) + (correaTres * 15000) + (unidadKong * 7500) + (unidadPlato * 10000) + (unidadDispensador * 6000);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [correaUno, correaDos, correaTres, unidadKong, unidadPlato, unidadDispensador]);

  const irAEtologia = () => {
    navigate(`/etologia`);
  };

  const irAAccesorios = () => {
    navigate(`/accesorios`);
  };

  const irACorreas = () => {
    navigate(`/correas`);
  };

  const borrarCarro = () => {
    setCorreaUno(0);
    setCorreaDos(0);
    setCorreaTres(0);
    setKong(0);
    setPlato(0);
    setDispensador(0);
    setTotal(0);
  }

  const borrarUnidad = (productId) => {
    if (productId === "correaUno") {
      setCorreaUno(0)
    } else if (productId === "correaDos") {
      setCorreaDos(0)
    } else if (productId === "correaTres") {
      setCorreaTres(0)
    } else if (productId === "unidadKong") {
      setKong(0)
    } else if (productId === "unidadPlato") {
      setPlato(0)
    } else if (productId === "unidadDispensador") {
      setDispensador(0)
    }
  }

  const disminuirCantidad = (productId) => {
    if (productId === "correaUno" && correaUno > 0) {
      setCorreaUno(correaUno - 1);
    } else if (productId === "correaDos" && correaDos > 0) {
      setCorreaDos(correaDos - 1);
    } else if (productId === "correaTres" && correaTres > 0) {
      setCorreaTres(correaTres - 1);
    } else if (productId === "unidadKong" && unidadKong > 0) {
      setKong(unidadKong - 1);
    } else if (productId === "unidadPlato" && unidadPlato > 0) {
      setPlato(unidadPlato - 1);
    } else if (productId === "unidadDispensador" && unidadDispensador > 0) {
      setDispensador(unidadDispensador - 1);
    }
  };

  const aumentarCantidad = (productId) => {
    if (productId === "correaUno") {
      setCorreaUno(correaUno + 1);
    } else if (productId === "correaDos") {
      setCorreaDos(correaDos + 1);
    } else if (productId === "correaTres") {
      setCorreaTres(correaTres + 1);
    } else if (productId === "unidadKong") {
      setKong(unidadKong + 1);
    } else if (productId === "unidadPlato") {
      setPlato(unidadPlato + 1);
    } else if (productId === "unidadDispensador") {
      setDispensador(unidadDispensador + 1);
    }
  };


  return (
    <Container className="container_carrito">
      {total >= 1
        ?
        <Card className="mb-5">
          <Card.Header className="text-center"><h3>Carrito de Compras 🛒</h3></Card.Header>
          <Card.Body>
            {correaUno >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={correa} alt="" /></div>
                <h5 className="h5_carro">Correa Pop</h5>
                <div className="div_cantidad_carro">Cantidad: {correaUno} | Precio: $10.000 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("correaUno")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("correaUno")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("correaUno")}>x</button>
                </div>
              </div>
              :
              null
            }
            {correaDos >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={correa1} alt="" /></div>
                <h5 className="h5_carro">Correa larga 3 metros</h5>
                <div className="div_cantidad_carro">Cantidad: {correaDos} | Precio: $12.000 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("correaDos")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("correaDos")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("correaDos")}>x</button>
                </div>
              </div>
              :
              null
            }
            {correaTres >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={correa2} alt="" /></div>
                <h5 className="h5_carro">Correa larga 4 metros</h5>
                <div className="div_cantidad_carro">Cantidad: {correaTres} | Precio: $15.000 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("correaTres")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("correaTres")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("correaTres")}>x</button>
                </div>
              </div>
              :
              null
            }
            {unidadKong >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={kong} alt="" /></div>
                <h5 className="h5_carro">Kong</h5>
                <div className="div_cantidad_carro">Cantidad: {unidadKong} | Precio: $7.500 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("unidadKong")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("unidadKong")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("unidadKong")}>x</button>
                </div>
              </div>
              :
              null
            }
            {unidadPlato >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={plato} alt="" /></div>
                <h5 className="h5_carro">Plato</h5>
                <div className="div_cantidad_carro">Cantidad: {unidadPlato} | Precio: $10.000 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("unidadPlato")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("unidadPlato")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("unidadPlato")}>x</button>
                </div>
              </div>
              :
              null
            }
            {unidadDispensador >= 1
              ?
              <div className="div_padre_carro">
                <div className="div_img_carro"><img className="img_carro" src={dispensador} alt="" /></div>
                <h5 className="h5_carro">Dispensador Agua</h5>
                <div className="div_cantidad_carro">Cantidad: {unidadDispensador} | Precio: $6.000 </div>
                <div className="div_btn_carro">
                  <button className="btn_carro_aumenta" onClick={() => aumentarCantidad("unidadDispensador")}>+</button>
                  <button className="btn_carro_disminuye" onClick={() => disminuirCantidad("unidadDispensador")}>-</button>
                  <button className="btn_carro" onClick={() => borrarUnidad("unidadDispensador")}>x</button>
                </div>
              </div>
              :
              null
            }
            <div className="d-flex justify-content-end">
              <h5 className="px-2">Total: ${total.toLocaleString('de-DE')}</h5>
              <Button variant="success" className="mx-2">Pagar</Button>
              <Button variant="danger" onClick={borrarCarro}>x</Button>
            </div>
          </Card.Body>
        </Card>
        :
        <Card className="text-center">
          <Card.Header><h3>Carrito de Compras 🛒</h3></Card.Header>
          <Card.Body>
            <Card.Title>No llevas nada aún 😢</Card.Title>
            <Card.Text>
              Revisa nuestros productos y vuelve por más!
            </Card.Text>
            <Button variant="success" onClick={irAEtologia}>Etología</Button>
            {' '}
            <Button variant="success" onClick={irAAccesorios}>Accesorios</Button>
            {' '}
            <Button variant="success" onClick={irACorreas}>Correas</Button>
          </Card.Body>
        </Card>
      }
    </Container>
  );
};

export default Carro;