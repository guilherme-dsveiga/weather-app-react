import React, { useState } from "react";
import "./card.css";
import DeleteIcon from "@material-ui/icons/Delete";

const Card = ({ name, main, temp, min, max, remove }) => {
  let emote, clima;
  let bgColor = "";
  let tempInt = Number(temp);

  switch (main) {
    case "Thunderstorm":
      clima = "Tempesade";
      emote = "âï¸";
      break;
    case "Drizzle":
      clima = "Chuvisco";
      emote = "â";
      break;
    case "Rain":
      clima = "Chuva";
      emote = "ð§ï¸";
      break;
    case "Snow":
      clima = "Neve";
      emote = "âï¸";
      break;
    case "Mist":
      clima = "NÃ©voa";
      emote = "ð";
      break;
    case "Smoke":
      clima = "FumaÃ§a";
      emote = "ð¨";
      break;
    case "Haze":
      clima = "Fumaceiro";
      emote = "ð¨";
      break;
    case "Dust":
      clima = "Poeira";
      emote = "ð¨";
      break;
    case "Fog":
      clima = "Neblina";
      emote = "ð¨";
      break;
    case "Sand":
      clima = "Areia";
      emote = "ð¨";
      break;
    case "Ash":
      clima = "Cinzas";
      emote = "ð";
      break;
    case "Squall":
      clima = "Rajadas de Vento";
      emote = "ðªï¸";
      break;
    case "Tornado":
      clima = "Tornado";
      emote = "ðªï¸";
      break;
    case "Clear":
      clima = "Claro";
      emote = "âï¸";
      break;
    case "Clouds":
      clima = "Nuvens";
      emote = "ð¥ï¸";
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

  if (name !== undefined) {
    return (
      <div
        style={{ backgroundColor: bgColor, display: "flex" }}
        className="card-item"
      >
        <div className="top-row">
          <div className="delete" onClick={() => remove(name)}>
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
        <h1>{Math.floor(temp)}ÂºC</h1>
        <div className="min-max">
          <p>Min: {Math.floor(min)}ÂºC</p>
          <p>Max: {Math.floor(max)}ÂºC</p>
        </div>
      </div>
    );
  } else {
    return <div>Cidade nÃ£o encontrada</div>;
  }
};

export default Card;
