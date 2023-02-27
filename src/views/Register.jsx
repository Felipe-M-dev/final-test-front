import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../Login.css';

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Register() {

    const { setUsers, users } = useContext(Context);

    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const addUser = () => {
        setUsers([...users, user]);
        alert("Usuario Creado con éxito, intente iniciar sesión");
        navigate("/login");
    };

    return (
        <>
            <Link to='/'>
                <Button style={{
                    background: 'none',
                    color: '#11194c',
                    border: 'none',
                    position: 'fixed',
                    fontWeight: 'bolder'
                }}>
                    X
                </Button>
            </Link>
            <Container fluid>
                <Row>
                    <Col className="col-md-6">
                        <Container style={{
                            textAlign: 'center',
                            paddingTop: '15vh',
                            fontSize: '10px',
                        }}>
                            <Row className="login-form">
                                <Col>
                                    <img src="logo.png" alt="kanri logo" style={{width: '100px'}}/>
                                    <h1 style={{ color: '#324adc' }}>KANRI</h1>
                                </Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["name"]: target.value })
                                            } 
                                            type="name" 
                                            placeholder="Nombre completo" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["email"]: target.value })
                                            }                                          
                                            type="email" 
                                            placeholder="usuario@example.com" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRol">
                                        <Form.Label>Rol</Form.Label>
                                        <Form.Control
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["rol"]: target.value })
                                            }  
                                            type="rol" 
                                            placeholder="rol" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRol">
                                        <Form.Label>Empresa</Form.Label>
                                        <Form.Control
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["company"]: target.value })
                                            }  
                                            type="company" 
                                            placeholder="empresa" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Crea una contraseña</Form.Label>
                                        <Form.Control
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["password"]: target.value })
                                            }                                          
                                            type="password" 
                                            placeholder="contraseña" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Repite la contraseña</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="contraseña"
                                        />
                                    </Form.Group>
                                    <Col>
                                        <Link to='/'>
                                            <Button style={{ 
                                                backgroundColor: 'transparent', 
                                                color: '#324adc', 
                                                borderColor: 'transparent',
                                                borderRadius: '.2rem',
                                                fontSize: '10px',
                                                width: '70px',
                                                marginRight: '2px',
                                                }}>
                                                Volver
                                            </Button>
                                        </Link>
                                        <Button onClick={addUser} type="submit" style={{ 
                                            backgroundColor: '#324adc', 
                                            color: 'white', 
                                            borderColor: '#324adc',
                                            borderRadius: '.2rem',
                                            fontSize: '10px',
                                            width: '70px',
                                            marginLeft: '2px',
                                            }}>
                                            Registrar
                                        </Button>
                                    </Col>
                                </Form>
                                <span style={{ paddingTop: '4vh' }}>Tu contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un caracter especial. (Ej. @$!%*?&#.)</span>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="col-md-6" style={{backgroundColor: '#11194c', height: '100vh'}}>
                        <Container className="container-login">
                            <Row className="col-md-4 container-no-img">
                            </Row>

                            <Row className="col-md-4 container-bg-img text-center">
                                <span style={{ paddingTop: '26vh' }}>
                                    <h3>Cuéntanos de ti</h3>
                                    Por favor, proporciona los siguientes datos para crear tu registro con nosotros.
                                </span>
                            </Row>
                            <Row className="col-md-4 container-no-img">
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}