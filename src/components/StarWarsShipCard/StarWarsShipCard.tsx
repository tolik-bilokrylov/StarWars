import React from 'react';
import { StarWarsShip } from '../../types';
import './StarWarsShipCard.css'

export const StarWarsShipCard: React.FC<{ starWarsShip: StarWarsShip }> = ({ starWarsShip }) => {

  const { name, model, starship_class, hyperdrive_rating, passengers, manufacturer } = starWarsShip;

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <h3>{model}</h3>
      <span className="discription">
        Starship class:
        <br />
        {starship_class}
      </span>
      <span className="discription">
        Hyperdrive rating:
        <br />
        {hyperdrive_rating}
      </span>
      <span className="discription">
        Passengers: &nbsp;
        {passengers}
      </span>
      <span className="discription">
        Manufacturer:
        <br />
        {manufacturer}
      </span>
    </div>
  )
};