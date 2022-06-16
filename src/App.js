import React from 'react';
import './App.scss';
import Pizza from './components/Pizza';
import pizzas from './pizzas';
import { useDispatch, useSelector } from 'react-redux';
import PizzaSelection from './components/PizzaSelection';
import {useNavigate } from 'react-router-dom';
import Order from './components/OrderDetails';

const App = () => {
	const orders = useSelector((state) => state.orders);

	const dispatch = useDispatch();
  const navigate = useNavigate();

	let handleClick = (page) => {
		return navigate(`/${page}`)
	};



	return (
		<div className="container">
			<div className="tittleScreen">PIZZA 3000</div>
      <button onClick={()=>{navigate("/Order")}}>Nouvelle Commande</button>
      
		</div>
	);
};

export default App;
