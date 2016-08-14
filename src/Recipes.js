import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map((recipe) => <Recipe key={ recipe } name={ recipe } />) }
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default Recipes;
