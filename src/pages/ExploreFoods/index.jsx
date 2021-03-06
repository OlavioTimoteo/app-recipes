import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Container from './styles';

function ExploreFood() {
  const history = useHistory();

  const fetchAPI = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const { meals } = await fetch(url).then((response) => response.json());
    return meals;
  };

  const handleClick = async () => {
    const fetchResult = await fetchAPI();
    history.push(`/comidas/${fetchResult[0].idMeal}`);
  };

  return (
    <>
      <Header pagename="Explorar Comidas " completeSearch={ false } />
      <Container>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          className="random"
          onClick={ handleClick }
        >
          Me Surpreenda!
        </button>
      </Container>
      <Footer />
    </>
  );
}

export default ExploreFood;
