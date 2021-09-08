export interface StarWarsShip {
  name: string,
  model: string,
  starship_class: string,
  hyperdrive_rating: string,
  passengers: string,
  manufacturer: string;
}

export interface ResultData {
  count: number,
  next: string | null,
  previous: string | null,
  results: StarWarsShip[];
}