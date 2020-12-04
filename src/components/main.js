import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Series from "./series";
import Chart from "./chart";
import { FormattedMessage } from "react-intl";

const Main = () => {
  const userLang = navigator.language || navigator.userLanguage;

  const [seriesList, setSeriesList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        setMessage("Error while connecting with API. Try again.");
      } else {
        setSeriesList(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      if (userLang.substring(0, 2) === "es") {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setSeriesList(data);
            localStorage.setItem("series", JSON.stringify(data));
          });
      } else {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setSeriesList(data);
            localStorage.setItem("series", JSON.stringify(data));
          });
      }
    }
  }, []);

  return (
    <React.Fragment>
      <p>{message}</p>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Series</h1>
            <Series series={seriesList} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>
              <FormattedMessage id="Seasons" />
            </h1>
            <Chart series={seriesList} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Main;
