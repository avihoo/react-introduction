import React from 'react';

const Recipe = ({ name }) => <li>{ name }</li>;

Recipe.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Recipe;
