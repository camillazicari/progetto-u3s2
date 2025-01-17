import { useEffect, useState } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";

const WeatherHome = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Roma&units=metric&appid=e1f2e9e83e9b22501a7be0bacb2f24d3";

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

  const sunriseTime = rome.city ? rome.city.sunrise : "undefined";
  const sunsetTime = rome.city ? rome.city.sunset : "undefined";

  const formatSunrise = () => {
    const sunriseDate = new Date(sunriseTime * 1000);
    const hours = sunriseDate.getHours();
    const minutes = sunriseDate.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  const formatSunset = () => {
    const sunsetDate = new Date(sunsetTime * 1000);
    const hours = sunsetDate.getHours();
    const minutes = sunsetDate.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  return (
    <Container fluid className="sfondo pb-5">
      <Row>
        <Col>
          <h1 className="display-1 fw-bold m-5 text-white titleShadow text-uppercase ">
            {rome.city ? rome.city.name : "undefined"}
          </h1>
          <h2 className="fw-bold mx-5 text-white titleShadow">
            Alba: {formatSunrise()}
          </h2>
          <h2 className="fw-bold mx-5 text-white titleShadow">
            Tramonto: {formatSunset()}
          </h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="d-flex align-items-center">
          <h3 className="mx-5 me-3 text-white fw-bold textShadow">
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
      <Row className="mx-2">
        <Col
          xs={4}
          className="border rounded-2 text-white textShadow text-center bg-white bg-opacity-50"
        >
          <h4 className="border-bottom p-2 border-2">OGGI:</h4>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 00:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[4] &&
                rome.list[4].weather &&
                rome.list[4].weather[0]
                  ? rome.list[4].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[4] &&
                    rome.list[4].weather &&
                    rome.list[4].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[4].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[4] && rome.list[4].main
                  ? rome.list[4].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[5] &&
                rome.list[5].weather &&
                rome.list[5].weather[0]
                  ? rome.list[5].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[5] &&
                    rome.list[5].weather &&
                    rome.list[5].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[5].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[5] && rome.list[5].main
                  ? rome.list[5].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[6] &&
                rome.list[6].weather &&
                rome.list[6].weather[0]
                  ? rome.list[6].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[6] &&
                    rome.list[6].weather &&
                    rome.list[6].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[6].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[6] && rome.list[6].main
                  ? rome.list[6].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[7] &&
                rome.list[7].weather &&
                rome.list[7].weather[0]
                  ? rome.list[7].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[7] &&
                    rome.list[7].weather &&
                    rome.list[7].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[7].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[7] && rome.list[7].main
                  ? rome.list[7].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[8] &&
                rome.list[8].weather &&
                rome.list[8].weather[0]
                  ? rome.list[8].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[8] &&
                    rome.list[8].weather &&
                    rome.list[8].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[8].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[8] && rome.list[8].main
                  ? rome.list[8].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[9] &&
                rome.list[9].weather &&
                rome.list[9].weather[0]
                  ? rome.list[9].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[9] &&
                    rome.list[9].weather &&
                    rome.list[9].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[9].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[9] && rome.list[9].main
                  ? rome.list[9].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[10] &&
                rome.list[10].weather &&
                rome.list[10].weather[0]
                  ? rome.list[10].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[10] &&
                    rome.list[10].weather &&
                    rome.list[10].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[10].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[10] && rome.list[10].main
                  ? rome.list[10].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col
          xs={4}
          className="border rounded-2 text-white textShadow text-center bg-white bg-opacity-50"
        >
          <h4 className="border-bottom p-2 border-2">DOMANI:</h4>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 00:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[11] &&
                rome.list[11].weather &&
                rome.list[11].weather[0]
                  ? rome.list[11].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[11] &&
                    rome.list[11].weather &&
                    rome.list[11].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[11].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[11] && rome.list[11].main
                  ? rome.list[11].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[12] &&
                rome.list[12].weather &&
                rome.list[12].weather[0]
                  ? rome.list[12].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[12] &&
                    rome.list[12].weather &&
                    rome.list[12].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[12].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[12] && rome.list[12].main
                  ? rome.list[12].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[13] &&
                rome.list[13].weather &&
                rome.list[13].weather[0]
                  ? rome.list[13].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[13] &&
                    rome.list[13].weather &&
                    rome.list[13].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[13].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[13] && rome.list[13].main
                  ? rome.list[13].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[14] &&
                rome.list[14].weather &&
                rome.list[14].weather[0]
                  ? rome.list[14].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[14] &&
                    rome.list[14].weather &&
                    rome.list[14].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[14].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[14] && rome.list[14].main
                  ? rome.list[14].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[15] &&
                rome.list[15].weather &&
                rome.list[15].weather[0]
                  ? rome.list[15].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[15] &&
                    rome.list[15].weather &&
                    rome.list[15].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[15].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[15] && rome.list[15].main
                  ? rome.list[15].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[16] &&
                rome.list[16].weather &&
                rome.list[16].weather[0]
                  ? rome.list[16].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[16] &&
                    rome.list[16].weather &&
                    rome.list[16].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[16].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[16] && rome.list[16].main
                  ? rome.list[16].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[17] &&
                rome.list[17].weather &&
                rome.list[17].weather[0]
                  ? rome.list[17].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[17] &&
                    rome.list[17].weather &&
                    rome.list[17].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[17].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[17] && rome.list[17].main
                  ? rome.list[17].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col
          xs={4}
          className="border rounded-2 text-white textShadow text-center bg-white bg-opacity-50"
        >
          <h4 className="border-bottom p-2 border-2">DOMANI:</h4>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 00:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[18] &&
                rome.list[18].weather &&
                rome.list[18].weather[0]
                  ? rome.list[18].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[18] &&
                    rome.list[18].weather &&
                    rome.list[18].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[18].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[18] && rome.list[18].main
                  ? rome.list[18].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[19] &&
                rome.list[19].weather &&
                rome.list[19].weather[0]
                  ? rome.list[19].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[19] &&
                    rome.list[19].weather &&
                    rome.list[19].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[19].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[19] && rome.list[19].main
                  ? rome.list[19].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[20] &&
                rome.list[20].weather &&
                rome.list[20].weather[0]
                  ? rome.list[20].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[20] &&
                    rome.list[20].weather &&
                    rome.list[20].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[20].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[20] && rome.list[20].main
                  ? rome.list[20].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[21] &&
                rome.list[21].weather &&
                rome.list[21].weather[0]
                  ? rome.list[21].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[21] &&
                    rome.list[21].weather &&
                    rome.list[21].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[21].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[21] && rome.list[21].main
                  ? rome.list[21].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[22] &&
                rome.list[22].weather &&
                rome.list[22].weather[0]
                  ? rome.list[22].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[22] &&
                    rome.list[22].weather &&
                    rome.list[22].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[22].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[22] && rome.list[22].main
                  ? rome.list[22].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[23] &&
                rome.list[23].weather &&
                rome.list[23].weather[0]
                  ? rome.list[23].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[23] &&
                    rome.list[23].weather &&
                    rome.list[23].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[23].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[23] && rome.list[23].main
                  ? rome.list[23].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {rome.list &&
                rome.list[24] &&
                rome.list[24].weather &&
                rome.list[24].weather[0]
                  ? rome.list[24].weather[0].description
                  : "undefined"}
                <img
                  src={
                    rome.list &&
                    rome.list[24] &&
                    rome.list[24].weather &&
                    rome.list[24].weather[0]
                      ? `https://openweathermap.org/img/wn/${rome.list[24].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {rome.list && rome.list[24] && rome.list[24].main
                  ? rome.list[24].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherHome;
