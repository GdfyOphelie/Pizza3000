import React from 'react';
import pizzas from '../pizzas';
import Pizza from './Pizza';

const PizzaSelection = () => {
	const listPizzas = pizzas.map((pizza) => {
		return <Pizza key={pizza.id} name={pizza.name} price={pizza.price} image={pizza.image} />;
	});

	console.log(listPizzas);

	return (
		<div className="container">
			<div className="pizzasSelect">{listPizzas}</div>
		</div>
	);
};

export default PizzaSelection;
