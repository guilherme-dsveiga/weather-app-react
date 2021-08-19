import React from 'react';
import './card.css';

export default ({ isRender, name, main, temp, min, max }) => {
        let emote, clima;
        switch (main) {
                case 'Thunderstorm':
                        clima = "Tempesade";
                        emote = '⛈️';
                        break;
                case 'Drizzle':
                        clima = "Chuvisco";
                        emote = '☔';
                        break;
                case 'Rain':
                        clima = "Chuva";
                        emote = '🌧️';
                        break;
                case 'Snow':
                        clima = "Neve";
                        emote = '❄️';
                        break;
                case 'Mist':
                        clima = "Névoa";
                        emote = '🌁';
                        break;
                case 'Smoke':
                        clima = "Fumaça";
                        emote = '💨';
                        break;
                case 'Haze':
                        clima = "Fumaceiro";
                        emote = '💨';
                        break;
                case 'Dust':
                        clima = "Poeira";
                        emote = '💨';
                        break;
                case 'Fog':
                        clima = "Neblina";
                        emote = '💨';
                        break;
                case 'Sand':
                        clima = "Areia";
                        emote = '💨';
                        break;
                case 'Ash':
                        clima = "Cinzas";
                        emote = '🌋';
                        break;
                case 'Squall':
                        clima = "Rajadas de Vento";
                        emote = '🌪️';
                        break;
                case 'Tornado':
                        clima = "Tornado";
                        emote = '🌪️';
                        break;
                case 'Clear':
                        clima = "Claro";
                        emote = '☀️';
                        break;
                case 'Clouds':
                        clima = "Nuvens";
                        emote = '🌥️';
                        break;
                default:

                        break;
        }

        if (isRender === true) {
                if (name !== undefined) {
                        return (
                                <div className="card-item">
                                        <h2>{name}</h2>
                                        <div className="climate-container">
                                                <span role="img" aria-label="emote">{emote}</span>
                                                <p>{clima}</p>
                                        </div>
                                        <h1>{Math.floor(temp)}ºC</h1>
                                        <div className="min-max">
                                                <p>Min: {Math.floor(min)}ºC</p>
                                                <p>Max: {Math.floor(max)}ºC</p>
                                        </div>
                                </div>
                        )
                } else {
                        return (
                                <div>
                                        <h3>Cidade não encontrada</h3>
                                </div>
                        )
                }
        } else {
                return (
                        <div>
                        </div>
                )
        }

}