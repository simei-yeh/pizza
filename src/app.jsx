import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {parseArray} from './helperfunctions.js'
import PizzasList from './PizzasList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    }
  }

  componentDidMount() {
    axios.get('/pizzas')
      .then((response) => {
        var mostPopular = parseArray(response.data);
        this.setState ({
          pizzas: mostPopular
        })
      })
      .catch((error) => {
      console.log(error);
    })
  }


  render() {
    return (<div>
      <PizzasList pizzas={this.state.pizzas}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;