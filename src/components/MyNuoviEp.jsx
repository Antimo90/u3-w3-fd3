import { Col, Container, Row } from "react-bootstrap";
import image4 from "../../public/images/2a.png";
import image5 from "../../public/images/2b.png";
import image6 from "../../public/images/2c.png";
import image7 from "../../public/images/2d.png";
import image8 from "../../public/images/2e.png";
import image9 from "../../public/images/2f.png";

const MyNuoviEp = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-5 ">
          <Col lg={12}>
            <h3 className="text-white mb-4">Nuovi episodi radio</h3>
          </Col>
          <Col lg={12}>
            <div className="d-flex flex-nowrap overflow-auto gap-3">
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image4}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image5}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image6}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image7}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image8}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
              <div style={{ minWidth: "250px" }}>
                <img
                  src={image9}
                  alt="quarta_immagine"
                  style={{ width: "250px" }}
                  className="rounded-3"
                />
                <p className="text-white">Prologo con Abuego</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNuoviEp;
