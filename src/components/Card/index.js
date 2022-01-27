/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./card.module.scss";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as TemperatureIcon } from "../../assets/temperature.svg";
import { ReactComponent as WindIcon } from "../../assets/wind.svg";

const Card = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.header_heading}>Current Weather</span>
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.content_item}>
            <LocationIcon />
            <div className={styles.dColumn}>
              <span className={styles.md}>City</span>
              <span
                className={styles.small}
              >{`${weatherData?.data?.name}`}</span>
            </div>
          </div>
          <div className={styles.content_item}>
            <span
              className={styles.small}
            >{`${weatherData?.data?.coord?.lat}, ${weatherData?.data?.coord?.lon}`}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content_item}>
            <TemperatureIcon />
            <div className={styles.dColumn}>
              <span className={styles.md}>
                {`${Math.round(weatherData?.data?.main?.temp)}`}
                <sup>o</sup>C
              </span>
              <span className={styles.small}>
                {`Max ${Math.round(weatherData?.data?.main?.temp_max)}`}
                <sup>o</sup>C
                {` /Min ${Math.round(weatherData?.data?.main?.temp_min)}`}
                <sup>o</sup>C
              </span>
            </div>
          </div>
          <div className={styles.content_item}>
            <img
              src={`http://openweathermap.org/img/w/${weatherData?.data?.weather[0]?.icon}.png`}
              alt="weather image"
            />
            <span>{`${weatherData?.data?.weather[0]?.main}`}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content_item}>
            <WindIcon />
            <div className={styles.dColumn}>
              <span className={styles.md}>Wind</span>
              <span className={styles.small}>
                {`speed ${weatherData?.data?.wind?.speed} ms`}
                <sup>-1</sup>
                {`/deg ${weatherData?.data?.wind?.deg}`}
              </span>
            </div>
          </div>
        </div>
        <h4>Details</h4>
        <span className={styles.small}>
          <b>Humidity:</b> {`${weatherData?.data?.main?.humidity} `}%
        </span>
        <br />
        <span className={styles.small}>
          <b>Pressure:</b> {`${weatherData?.data?.main?.pressure} `} hPa
        </span>
        <br />
        <span className={styles.small}>
          <b>Cloudiness:</b> {`${Math.round(weatherData?.data?.clouds?.all)} %`}
        </span>
        <br />
      </div>
    </div>
  );
};
export default Card;
