import React, { useState, useEffect, useCallback } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';
import { urlStarWarsShips } from '../../api/api';
import { StarWarsShipCard } from '../StarWarsShipCard/StarWarsShipCard';
import { StarWarsShip } from '../../types';
import { ResultData } from '../../types';
import './StarWarsShipsList.css';

const StarWarsShipsList = () => {
  const [starWarsShips, setStarWarsShips] = useState<StarWarsShip[]>([]);
  const [fullInfo, setFullInfo] = useState<ResultData>({ count: 36, next: "" || null, previous: "" || null, results: [] });
  const [page, setPage] = useState<number>(1);

  let pageStarWarsShips = `${urlStarWarsShips}/?page=${page}`;

  useEffect(() => {
    axios.get<ResultData>(pageStarWarsShips)
      .then((response) => {
        const result = response.data;
        setFullInfo(response.data);
        setStarWarsShips(result.results);
      })
  }, [pageStarWarsShips]);

  const previousPage = useCallback(() => {
    setPage(page - 1)
  }, [page]);
  const nextPage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  return (
    <div className="wrapper">
      <div
        className="container-list"
      >
        {starWarsShips.map((starWarsShip: StarWarsShip) => (
          <StarWarsShipCard
            key={starWarsShip.name}
            starWarsShip={starWarsShip}
          />
        ))}
      </div>
      <div className="btn-field">
        <Pagination size="lg" aria-label="Page navigation example">
          <PaginationItem
            disabled={fullInfo.previous === null}
            onClick={previousPage}
          >
            <PaginationLink previous />
          </PaginationItem>
          <PaginationItem
            disabled={fullInfo.next === null}
            onClick={nextPage}
          >
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  )
}

export default StarWarsShipsList;
