import React from 'react';
import { StarWarsShip } from '../../types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './StarWarsShipCard.css'

export const StarWarsShipCard: React.FC<{ starWarsShip: StarWarsShip }> = ({ starWarsShip }) => {

  const { name, model, starship_class, hyperdrive_rating, passengers, manufacturer } = starWarsShip;

  return (
    <Card className="ship-card">
      <CardBody className="ship-card-body">
        <CardTitle tag="h2">
          {name}
        </CardTitle>
        <CardSubtitle tag="h3" className="mb-2 text-muted">
          {model}
        </CardSubtitle>
        <CardSubtitle tag="h3" className="mb-2 text-muted">
          Starship class:
          <br />
          {starship_class}
        </CardSubtitle>
        <CardSubtitle tag="h3" className="mb-2 text-muted">
          Hyperdrive rating:
          <br />
          {hyperdrive_rating}
        </CardSubtitle>
        <CardSubtitle tag="h3" className="mb-2 text-muted">
          Passengers:
          <br />
          {passengers}
        </CardSubtitle>
        <CardSubtitle tag="h3" className="mb-2 text-muted">
          Manufacturer:
          <br />
          {manufacturer}
        </CardSubtitle>
      </CardBody>
    </Card>
  )
};