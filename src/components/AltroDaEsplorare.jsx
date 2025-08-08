import { Col, Container, Row } from "react-bootstrap";

const AltroDaEsplorare = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={12}>
            <h3 className="text-white mt-5 mb-3">Altro da Esporare</h3>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Esplora per genere</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Decenni</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Attività e stati d'animo</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Worldwide</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Classifiche</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Audio spaziale</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Video musicali</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Nuovi artisti</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div
              className="text-danger py-3 px-3  d-flex align-items-center justify-content-between mb-3"
              style={{ backgroundColor: "#343a40", borderRadius: "15px" }}
            >
              <p className="mb-0">Hit del passato</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AltroDaEsplorare;
