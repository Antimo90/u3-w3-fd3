import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className="bg-dark text-light py-4 mt-5">
      <Row className="text-center text-md-start">
        <Col xs={12} md={6} className="mb-3">
          <p className="mb-0">
            <span className="me-2">Italia</span>|
            <a href="#" className="text-light ms-2 text-decoration-none">
              English (UK)
            </a>
          </p>
        </Col>
        <Col xs={12} md={6} className="text-md-end mb-3">
          <p className="mb-0">
            <a href="#" className="text-light me-3 text-decoration-none">
              Condizioni dei servizi internet
            </a>
            <a href="#" className="text-light me-3 text-decoration-none">
              Apple Music e privacy
            </a>
            <a href="#" className="text-light me-3 text-decoration-none">
              Avviso sui cookie
            </a>
            <a href="#" className="text-light me-3 text-decoration-none">
              Supporto
            </a>
            <a href="#" className="text-light text-decoration-none">
              Feedback
            </a>
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center text-secondary">
          <p className="mb-0">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
