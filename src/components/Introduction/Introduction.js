import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Bienvenido a la academia para desarrollo personal {" "}
                            <span className="pt-2 pb-4">¿Qué quieres aprender?</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                            En esta academia puedes aprender desde desarrollo web hasta montar tu propia Start-Up de tennología, aventurate con nosotros y descubre todo tu potencial
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={() => window.location='#services'}
                                >Nuestros Cursos</Button>
                                <Button className="p-3">Nuestros Cursos</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Cuentanos sobre ti</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}
