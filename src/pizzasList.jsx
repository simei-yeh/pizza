import React from 'react'
import PizzasListItem from './PizzasListItem.jsx'

const PizzasList = (props) => (
  <ul>
    {props.pizzas.map((pizza) => <PizzasListItem key={props.pizzas.key} toppings={props.pizza.combos} />)}
  </ul>
)

export default PizzasList;