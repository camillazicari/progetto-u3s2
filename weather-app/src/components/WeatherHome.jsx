import { useEffect, useState } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";

const WeatherHome = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Roma&appid=e1f2e9e83e9b22501a7be0bacb2f24d3";

  const [rome, setRome] = useState({});

  const GetRome = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("ECCO ROMA:", data);
        setRome(data);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch {
      console.log("ERRORE", Error);
    }
  };

  useEffect(() => {
    GetRome();
  }, []);

  return (
    <Container fluid className="sfondo">
      <Row>
        <Col>
          <h1 className="display-1 fw-bold m-5 text-white titleShadow">Rome</h1>
        </Col>
      </Row>
      <Row className="mx-5 mb-5">
        <Col className="d-flex align-items-center">
          <h3 className="me-3 text-white fw-bold textShadow">
            <u>Current Weather</u>:
          </h3>
          <h3 className="text-white fw-bolder textShadow text-uppercase">
            {rome.list &&
            rome.list[0] &&
            rome.list[0].weather &&
            rome.list[0].weather[0]
              ? rome.list[0].weather[0].main
              : "undefined"}
          </h3>
          <img
            src={
              rome.list &&
              rome.list[0] &&
              rome.list[0].weather &&
              rome.list[0].weather[0]
                ? `https://openweathermap.org/img/wn/${rome.list[0].weather[0].icon}@2x.png`
                : "#"
            }
            alt="Weather icon"
            style={{ width: "70px", height: "70px" }}
          />
        </Col>
      </Row>
      <Row className="bg-white bg-opacity-50">
        <Col
          xs={4}
          className="border rounded-2 text-center text-white textShadow"
        >
          <h4 className="border-bottom p-2 border-2">OGGI:</h4>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              Dapibus ac facilisis in
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              Porta ac consectetur ac
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              Vestibulum at eros
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col
          xs={4}
          className="border rounded-2 text-center text-white textShadow"
        >
          <h4 className="border-bottom p-2 border-2">DOMANI:</h4>
        </Col>
        <Col
          xs={4}
          className="border rounded-2 text-center text-white textShadow"
        >
          <h4 className="border-bottom p-2 border-2">DOPODOMANI:</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherHome;
