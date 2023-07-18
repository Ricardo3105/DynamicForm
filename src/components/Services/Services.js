import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/hbo.jpeg";
import imgCourse2 from "../../assets/img/netflix.jpeg";
import imgCourse3 from "../../assets/img/prime.jpeg";
import imgCourse4 from "../../assets/img/desarrollosoftware.jpg";
import imgCourse5 from "../../assets/img/FinanzasPersonales.jpg";
import imgCourse6 from "../../assets/img/startup.jpg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Programación y Desarrollo de Software",
            subtitle: "Aprende programación de cero a profesional para ingeniería de software, ciencia de datos y computer science. ",
            image: imgCourse4,
            footer: "Go to the course ➡️",
            link: "https://platzi.com/ruta/startups-legacy/",
        },
        {
            title: "Finanzas e Inversiones",
            subtitle: "Aprende los fundamentos de las finanzas mientras gestionas tu dinero para no sólo ahorrar sino crear prácticas de inversión en activos de renta fija o variable.",
            image: imgCourse5,
            footer: "Go to the course ➡️",
            link: "https://platzi.com/ruta/finanzas-legacy/",
        },
        {
            title: "Ruta de Startups",
            subtitle: "Crea tu startup o, si ya tienes una, acelérala. Aprende a afrontar los desafíos del emprendimiento. Lanza tu MVP sin código.",
            image: imgCourse6,
            footer: "Go to the course ➡️",
            link: "https://platzi.com/ruta/ruta-software/",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
