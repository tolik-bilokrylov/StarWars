import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlStarWarsShips } from '../../api/api';
// import { Buttons } from '../Buttons/Buttons';
import { StarWarsShipCard } from '../StarWarsShipCard/StarWarsShipCard';
import { StarWarsShip } from '../../types';
import { Container, Row, Col } from 'react-bootstrap';

function StarWarsShipsList() {
  const [starWarsShips, setStarWarsShips] = useState([]);
  const [info, setInfo] = useState({});
  // const [page, setPage] = useState(1);

  let pageStarWarsShips = `${urlStarWarsShips}/?page=${1}`;

  useEffect(() => {
    axios.get(pageStarWarsShips)
      .then((response) => {
        const result = (response.data);
        setInfo(response.data);
        setStarWarsShips(result.results);
      })
  }, [pageStarWarsShips]);
  console.log(info)

  return (
    <div>
      {/* <Buttons
        page={page}
        setPage={setPage}
        count={info.count}
        previous={info.previous}
      /> */}
      {/* <div className="button-container">
        <button
          className="button"
          type="button"
          disabled={info.previous === null}
          onClick={() => setPage(page - 1)}
        >
          previous
        </button>
        <button
          className="button"
          type="button"
          disabled={info.next === null}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div> */}
      <Container>
        <Row xs={2} md={3} lg={4}>
          {starWarsShips.map((starWarsShip: StarWarsShip) => (
            <Col style={{ gap: 10 }}>
              <StarWarsShipCard
                key={starWarsShip.name}
                starWarsShip={starWarsShip}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div
        className="container"
      >
        {/* {starWarsShips.map((starWarsShip: StarWarsShip) => (
          <StarWarsShipCard
            key={starWarsShip.name}
            starWarsShip={starWarsShip}
          />
        ))} */}
      </div>
    </div>
  )
}

export default StarWarsShipsList;
