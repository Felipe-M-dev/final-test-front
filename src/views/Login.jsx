import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../Login.css';

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Login() {

    const { setSession, users, data } = useContext(Context);

    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const addUser = () => {
        const userExists =
        users.some((u) => u.email === user.email && u.password === user.password) ||
        true;
        if (userExists) {
            setSession(user);
            alert(`Usuario identificado con éxito, bienvenido ${data.name}`);
            navigate("/perfil");
        } else {
            alert("Email o contraseña incorrecta");
        }
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
                            paddingTop: '25vh',
                            fontSize: '10px',
                        }}>
                            <Row className="login-form">
                                <Col>
                                    <img src="logo.png" alt="kanri logo" style={{width: '100px'}}/>
                                    <h1 style={{ color: '#324adc' }}>KANRI</h1>
                                </Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control 
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["email"]: target.value })
                                            }
                                            type="email" 
                                            placeholder="usuario@example.com" 
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control 
                                            onChange={({ target }) =>
                                                setUser({ ...user, ["password"]: target.value })
                                            }
                                            type="password" 
                                            placeholder="contraseña" 
                                            />
                                    </Form.Group>
                                    <Button onClick={addUser} type="submit"style={{ 
                                        backgroundColor: '#324adc', 
                                        color: 'white', 
                                        borderColor: '#324adc',
                                        borderRadius: '.2rem',
                                        fontSize: '10px',
                                        }}>
                                        Iniciar sesión
                                    </Button>
                                </Form>
                                <Link to='/register' style={{
                                    paddingTop: '50px',
                                    color: '#324adc',
                                    textDecoration: 'none'
                                }}>
                                    <span>Regístrate ahora</span>
                                </Link>
                                <Link to='/' style={{
                                    color: '#324adc',
                                    textDecoration: 'none'
                                }}>
                                    <span>Volver</span>
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="col-md-6" style={{backgroundColor: '#11194c', height: '100vh'}}>
                        <Container className="container-login">
                            <Row className="col-md-4 container-no-img">
                            </Row>

                            <Row className="col-md-4 container-bg-img text-center">
                                <span style={{ paddingTop: '26vh' }}>
                                    <h3>¡Bienvenido a Kanri!</h3>
                                    La plataforma perfecta que facilita la gestión y el inventario de tus recursos informáticos.
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