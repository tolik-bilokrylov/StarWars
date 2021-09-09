import React from 'react';
import { StarWarsShip } from '../../types';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './StarWarsShipCard.css'

export const StarWarsShipCard: React.FC<{ starWarsShip: StarWarsShip }> = ({ starWarsShip }) => {

  const { name, model, starship_class, hyperdrive_rating, passengers, manufacturer } = starWarsShip;

  return (
    // <div className="card">
    //   <h2 className="name">{name}</h2>
    //   <h3>{model}</h3>
    //   <span className="discription">
    //     Starship class:
    //     <br />
    //     {starship_class}
    //   </span>
    //   <span className="discription">
    //     Hyperdrive rating:
    //     <br />
    //     {hyperdrive_rating}
    //   </span>
    //   <span className="discription">
    //     Passengers: &nbsp;
    //     {passengers}
    //   </span>
    //   <span className="discription">
    //     Manufacturer:
    //     <br />
    //     {manufacturer}
    //   </span>
    // </div>
    <Card>
      <CardBody style={{ padding: 0 }}>
        <CardTitle tag="h3">{name}</CardTitle>
        <CardSubtitle tag="h4" className="mb-2 text-muted long-name">{model}</CardSubtitle>
        <CardText className="discription">
          Starship class:
          <br />
          {starship_class}
        </CardText>
        <CardText className="discription">
          Hyperdrive rating:
          <br />
          {hyperdrive_rating}
        </CardText>
        <CardText className="discription">
          Passengers:
          <br />
          {passengers}
        </CardText>
        <CardText className="discription">
          Manufacturer:
          <br />
          {manufacturer}
        </CardText>
      </CardBody>
    </Card>
  )
};