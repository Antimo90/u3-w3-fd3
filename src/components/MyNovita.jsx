import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../public/images/1a.png";
import image2 from "../../public/images/1b.png";
import image3 from "../../public/images/1c.png";

const MyNovita = () => {
  return (
    <>
      <Container fluid>
        <Row className="align-items-start mt-5">
          <Col xs={12}>
            <h1 className="text-white">Novità</h1>
            <hr className="border-white" />
          </Col>

          <Col xs={12} className="d-flex flex-nowrap overflow-auto">
            <div
              className="d-flex flex-column me-3"
              style={{ minWidth: "550px", maxWidth: "550px" }}
            >
              <h6 className="text-white opacity-50">NUOVA STAZIONE RADIO</h6>
              <h5 className="text-white flex-grow-1">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </h5>
              <img
                src={image1}
                alt="Prima_immagine_novità"
                className="img-fluid rounded-3"
              />
            </div>

            <div
              className="d-flex flex-column me-3"
              style={{ minWidth: "550px", maxWidth: "550px" }}
            >
              <h6 className="text-white opacity-50">NUOVA STAZIONE RADIO</h6>
              <h5 className="text-white flex-grow-1">
                Ecco la nuova casa della musica latina
              </h5>
              <img
                src={image2}
                alt="Seconda_immagine_novità"
                className="img-fluid rounded-3"
              />
            </div>

            <div
              className="d-flex flex-column "
              style={{ minWidth: "550px", maxWidth: "550px" }}
            >
              <h6 className="text-white opacity-50">NUOVA STAZIONE RADIO</h6>
              <h5 className="text-white flex-grow-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
              <img
                src={image3}
                alt="Terza_immagine_novità"
                className="img-fluid rounded-3"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNovita;
