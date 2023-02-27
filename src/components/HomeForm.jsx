import { Container, Row, Col, Form, Button} from "react-bootstrap";

import '../css/styles.css';

export default function HomeForm() {

    return (
        <Container fluid className="mt-4 mb-5">
            <div style={{ textAlign: 'center' }}>
                Dejas tu mensaje y te contactaremos a la brevedad.
            </div>
            <Row className="justify-content-md-center mt-4">
                <Col md="auto" style={{ width: '300px'}}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="textarea" placeholder="Ingresa tú nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tú email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button style={{ backgroundColor: '#324adc' }} type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
                <Col md="auto" style={{
                    paddingTop: '3rem'
                }}>
                    <div style={{ fontWeight: 'bold' }}>
                        Dirección y teléfonos
                    </div>
                    <div style={{
                    paddingTop: '1rem'
                }}>
                        742 Evergreen Terrace, Springfield <br/>
                        <span>Nevada, EEUU.</span> <br/><br/>
                        555-555-5555
                    </div>
                </Col>
            </Row>
        </Container>
    ); 
}