import React, { useState } from "react";
import { Layout, InputSearch, Loader, Card } from "../components";
import { weatherReq } from "../api";
import styles from "./styles.module.scss";

const Weather = () => {
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const onSearch = () => {
    setLoading(true);
    setError("");
    setWeatherData(null);
    if (!searchCity) {
      setError("Please enter the city");
      setLoading(false);
      return;
    }
    weatherReq({
      method: "GET",
      url: "/weather",
      params: {
        q: searchCity,
        units: "metric",
      },
    })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Not Found");
      });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <InputSearch
          inputVal={searchCity}
          setInputVal={setSearchCity}
          onClickSearch={onSearch}
        />
        <div className={styles.result}>
          {loading && <Loader />}
          {error && <div className={styles.errorFound}>{error}</div>}
          {weatherData && <Card weatherData={weatherData} />}
        </div>
      </div>
    </Layout>
  );
};
export default Weather;
