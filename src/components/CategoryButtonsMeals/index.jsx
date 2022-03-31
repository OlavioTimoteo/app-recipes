import React from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../../context/AppProvider';

import Container from './styles';

export default function CategoryButtonsMeals(props) {
  const {
    setSelectedCategoryMeals,
    selectedCategoryMeals,
    isSearch,
    setIsSearch,
  } = useAppContext();
  const { buttonsData } = props;
  const STARTING_ON_INDEX_0 = 0;
  const GET_FIVE_ELEMENTS = 5;

  const manipulateCategoryState = (buttonCategory) => {
    if (selectedCategoryMeals === buttonCategory) {
      setIsSearch(isSearch ? !isSearch : isSearch);
      setSelectedCategoryMeals('search.php?s=');
    } else {
      setIsSearch(isSearch ? !isSearch : isSearch);
      setSelectedCategoryMeals(buttonCategory);
    }
  };

  const manipulateCategoryAll = () => {
    setSelectedCategoryMeals('search.php?s=');
    setIsSearch(isSearch ? !isSearch : isSearch);
  };

  return (
    <Container>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => manipulateCategoryAll() }
        className="category-buttons"
      >
        All
      </button>

      {
        [...buttonsData]
          .splice(STARTING_ON_INDEX_0, GET_FIVE_ELEMENTS)
          .map((buttonData) => (
            <button
              type="button"
              key={ buttonData.strCategory }
              data-testid={ `${buttonData.strCategory}-category-filter` }
              onClick={ () => manipulateCategoryState(
                `filter.php?c=${buttonData.strCategory}`,
              ) }
              className="category-buttons"
            >
              { buttonData.strCategory }
            </button>
          ))
      }
    </Container>
  );
}

CategoryButtonsMeals.propTypes = {
  buttonsData: PropTypes.array,
}.isRequired;
