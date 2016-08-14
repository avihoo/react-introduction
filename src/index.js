import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';

const recipes = ['Waffel', 'Omelette'];

class App extends React.Component {

  constructor() {
    super();

    this.state = { recipes };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log('I am mounted!')
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({
      recipes: [...this.state.recipes, this.refs.title.value]
    });

    this.refs.title.value = '';
  }

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <Recipes recipes={ this.state.recipes }/>

        <form onSubmit={ this.onSubmit }>
          <input ref="title" type="text"/>
          <button>Add Recipe</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
