/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";

const CityWeather = () => {
  const param = useParams();
  console.log("PARAMETRO", param);

  const pixaUrl =
    "https://pixabay.com/api/?key=48286807-c48be681705a0319ee8581487&q=" +
    param.citySearch +
    "&image_type=photo&orientation=vertical";
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    param.citySearch +
    "&units=metric&appid=e1f2e9e83e9b22501a7be0bacb2f24d3";

  const [city, setCity] = useState({});
  const [foto, setFoto] = useState({});

  const GetCity = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("ECCO LA CITTA':", data);
        setCity(data);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch {
      console.log("ERRORE", Error);
    }
  };

  const GetPhoto = async () => {
    try {
      const response = await fetch(pixaUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("ECCO LA FOTO':", data);
        setFoto(data);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch {
      console.log("ERRORE", Error);
    }
  };

  useEffect(() => {
    GetCity();
    GetPhoto();
  }, [param]);

  const sunriseTime = city.city ? city.city.sunrise : "undefined";
  const sunsetTime = city.city ? city.city.sunset : "undefined";

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

  const style = {
    backgroundImage: `url(${
      foto.hits && foto.hits.length > 0
        ? foto.hits[0].webformatURL
        : "https://i.pinimg.com/originals/e6/84/d2/e684d28d15c0cd42069bec09ea7d2a95.jpg"
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Container fluid className="pb-5" style={style}>
      <Row>
        <Col>
          <h1 className="display-1 fw-bold m-5 text-white titleShadow text-uppercase">
            {city.city ? city.city.name : "undefined"}
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
          <h3 className="me-3 text-white fw-bold textShadow mx-5">
            <u>Current Weather</u>:
          </h3>
          <h3 className="text-white fw-bolder textShadow text-uppercase">
            {city.list &&
            city.list[0] &&
            city.list[0].weather &&
            city.list[0].weather[0]
              ? city.list[0].weather[0].main
              : "undefined"}
          </h3>
          <img
            src={
              city.list &&
              city.list[0] &&
              city.list[0].weather &&
              city.list[0].weather[0]
                ? `https://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`
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
                {city.list &&
                city.list[4] &&
                city.list[4].weather &&
                city.list[4].weather[0]
                  ? city.list[4].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[4] &&
                    city.list[4].weather &&
                    city.list[4].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[4].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[4] && city.list[4].main
                  ? city.list[4].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[5] &&
                city.list[5].weather &&
                city.list[5].weather[0]
                  ? city.list[5].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[5] &&
                    city.list[5].weather &&
                    city.list[5].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[5].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[5] && city.list[5].main
                  ? city.list[5].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[6] &&
                city.list[6].weather &&
                city.list[6].weather[0]
                  ? city.list[6].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[6] &&
                    city.list[6].weather &&
                    city.list[6].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[6].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[6] && city.list[6].main
                  ? city.list[6].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[7] &&
                city.list[7].weather &&
                city.list[7].weather[0]
                  ? city.list[7].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[7] &&
                    city.list[7].weather &&
                    city.list[7].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[7].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[7] && city.list[7].main
                  ? city.list[7].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[8] &&
                city.list[8].weather &&
                city.list[8].weather[0]
                  ? city.list[8].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[8] &&
                    city.list[8].weather &&
                    city.list[8].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[8].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[8] && city.list[8].main
                  ? city.list[8].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[9] &&
                city.list[9].weather &&
                city.list[9].weather[0]
                  ? city.list[9].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[9] &&
                    city.list[9].weather &&
                    city.list[9].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[9].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[9] && city.list[9].main
                  ? city.list[9].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[10] &&
                city.list[10].weather &&
                city.list[10].weather[0]
                  ? city.list[10].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[10] &&
                    city.list[10].weather &&
                    city.list[10].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[10].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[10] && city.list[10].main
                  ? city.list[10].main.temp + "°"
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
                {city.list &&
                city.list[11] &&
                city.list[11].weather &&
                city.list[11].weather[0]
                  ? city.list[11].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[11] &&
                    city.list[11].weather &&
                    city.list[11].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[11].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[11] && city.list[11].main
                  ? city.list[11].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[12] &&
                city.list[12].weather &&
                city.list[12].weather[0]
                  ? city.list[12].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[12] &&
                    city.list[12].weather &&
                    city.list[12].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[12].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[12] && city.list[12].main
                  ? city.list[12].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[13] &&
                city.list[13].weather &&
                city.list[13].weather[0]
                  ? city.list[13].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[13] &&
                    city.list[13].weather &&
                    city.list[13].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[13].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[13] && city.list[13].main
                  ? city.list[13].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[14] &&
                city.list[14].weather &&
                city.list[14].weather[0]
                  ? city.list[14].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[14] &&
                    city.list[14].weather &&
                    city.list[14].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[14].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[14] && city.list[14].main
                  ? city.list[14].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[15] &&
                city.list[15].weather &&
                city.list[15].weather[0]
                  ? city.list[15].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[15] &&
                    city.list[15].weather &&
                    city.list[15].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[15].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[15] && city.list[15].main
                  ? city.list[15].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[16] &&
                city.list[16].weather &&
                city.list[16].weather[0]
                  ? city.list[16].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[16] &&
                    city.list[16].weather &&
                    city.list[16].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[16].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[16] && city.list[16].main
                  ? city.list[16].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[17] &&
                city.list[17].weather &&
                city.list[17].weather[0]
                  ? city.list[17].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[17] &&
                    city.list[17].weather &&
                    city.list[17].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[17].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[17] && city.list[17].main
                  ? city.list[17].main.temp + "°"
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
                {city.list &&
                city.list[18] &&
                city.list[18].weather &&
                city.list[18].weather[0]
                  ? city.list[18].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[18] &&
                    city.list[18].weather &&
                    city.list[18].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[18].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[18] && city.list[18].main
                  ? city.list[18].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 03:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[19] &&
                city.list[19].weather &&
                city.list[19].weather[0]
                  ? city.list[19].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[19] &&
                    city.list[19].weather &&
                    city.list[19].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[19].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[19] && city.list[19].main
                  ? city.list[19].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold h6">
              <p className="m-0 p-0">
                <u>Ore 06:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[20] &&
                city.list[20].weather &&
                city.list[20].weather[0]
                  ? city.list[20].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[20] &&
                    city.list[20].weather &&
                    city.list[20].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[20].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[20] && city.list[20].main
                  ? city.list[20].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 12:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[21] &&
                city.list[21].weather &&
                city.list[21].weather[0]
                  ? city.list[21].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[21] &&
                    city.list[21].weather &&
                    city.list[21].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[21].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[21] && city.list[21].main
                  ? city.list[21].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 15:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[22] &&
                city.list[22].weather &&
                city.list[22].weather[0]
                  ? city.list[22].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[22] &&
                    city.list[22].weather &&
                    city.list[22].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[22].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[22] && city.list[22].main
                  ? city.list[22].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 18:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[23] &&
                city.list[23].weather &&
                city.list[23].weather[0]
                  ? city.list[23].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[23] &&
                    city.list[23].weather &&
                    city.list[23].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[23].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[23] && city.list[23].main
                  ? city.list[23].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 text-white textShadow fw-bold">
              <p className="m-0 p-0">
                <u>Ore 21:00:</u>
              </p>{" "}
              <p className="text-uppercase m-0 p-0">
                {city.list &&
                city.list[24] &&
                city.list[24].weather &&
                city.list[24].weather[0]
                  ? city.list[24].weather[0].description
                  : "undefined"}
                <img
                  src={
                    city.list &&
                    city.list[24] &&
                    city.list[24].weather &&
                    city.list[24].weather[0]
                      ? `https://openweathermap.org/img/wn/${city.list[24].weather[0].icon}@2x.png`
                      : "#"
                  }
                  className="iconss"
                />
              </p>
              <p>
                {city.list && city.list[24] && city.list[24].main
                  ? city.list[24].main.temp + "°"
                  : "undefined"}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CityWeather;
