import React, { useState } from "react";
import "./card.css";
import DeleteIcon from "@material-ui/icons/Delete";

const Card = ({ isRender, name, main, temp, min, max }) => {
  let emote, clima;
  let bgColor = "";
  let tempInt = parseInt(temp, "10");

  const [displayHandler, setDisplayHandler] = useState("flex");

  const deleteCard = () => {
    setDisplayHandler("none");
  };

  switch (main) {
    case "Thunderstorm":
      clima = "Tempesade";
      emote = "⛈️";
      break;
    case "Drizzle":
      clima = "Chuvisco";
      emote = "☔";
      break;
    case "Rain":
      clima = "Chuva";
      emote = "🌧️";
      break;
    case "Snow":
      clima = "Neve";
      emote = "❄️";
      break;
    case "Mist":
      clima = "Névoa";
      emote = "🌁";
      break;
    case "Smoke":
      clima = "Fumaça";
      emote = "💨";
      break;
    case "Haze":
      clima = "Fumaceiro";
      emote = "💨";
      break;
    case "Dust":
      clima = "Poeira";
      emote = "💨";
      break;
    case "Fog":
      clima = "Neblina";
      emote = "💨";
      break;
    case "Sand":
      clima = "Areia";
      emote = "💨";
      break;
    case "Ash":
      clima = "Cinzas";
      emote = "🌋";
      break;
    case "Squall":
      clima = "Rajadas de Vento";
      emote = "🌪️";
      break;
    case "Tornado":
      clima = "Tornado";
      emote = "🌪️";
      break;
    case "Clear":
      clima = "Claro";
      emote = "☀️";
      break;
    case "Clouds":
      clima = "Nuvens";
      emote = "🌥️";
      break;
    default:
      break;
  }

  if (tempInt < 0) {
    bgColor = "#256dcc";
  } else if (tempInt >= 0 && tempInt < 10) {
    bgColor = "#25ccab";
  } else if (tempInt >= 10 && tempInt < 15) {
    bgColor = "#25cc3b";
  } else if (tempInt >= 15 && tempInt < 20) {
    bgColor = "#87cf23";
  } else if (tempInt >= 20 && tempInt < 25) {
    bgColor = "#debd1b";
  } else if (tempInt >= 25 && tempInt < 30) {
    bgColor = "#e6a015";
  } else if (tempInt >= 30) {
    bgColor = "#ed3b24";
  }

  if (isRender === true) {
    if (name !== undefined) {
      return (
        <div
          style={{ backgroundColor: bgColor, display: displayHandler }}
          className="card-item"
        >
          <div className="top-row">
            <div className="delete" onClick={deleteCard}>
              <DeleteIcon></DeleteIcon>
            </div>
            <h2>{name}</h2>
          </div>
          <div className="climate-container">
            <span role="img" aria-label="emote">
              {emote}
            </span>
            <p>{clima}</p>
          </div>
          <h1>{Math.floor(temp)}ºC</h1>
          <div className="min-max">
            <p>Min: {Math.floor(min)}ºC</p>
            <p>Max: {Math.floor(max)}ºC</p>
          </div>
        </div>
      );
    } else {
      return <div>Cidade não encontrada</div>;
    }
  } else {
    return <></>;
  }
};

export default Card;
