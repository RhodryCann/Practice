import React, { useState } from "react";

const getStockQuote = (symbol) => (
	fetch(`https://twelve-data1.p.rapidapi.com/quote?symbol=${symbol}&interval=1day&outputsize=30&format=json`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "5833e0152dmsh4d85cf98bb55712p149824jsnc0cb33c54d5d", //hide this key
			"x-rapidapi-host": "twelve-data1.p.rapidapi.com"
		}
	})
);

// destructuring props
const Stock = ({ stock }) => {
	const [price, setPrice] = useState("");
    return (
        <ul> 
            <li>{stock.symbol}</li>
            <li>{stock.name}</li>
            <li>{stock.currency}</li>
            <li>{stock.exchange}</li>
            <button onClick={() => {
                const symbol = stock.symbol;
                getStockQuote(symbol)
                    .then(response => response.json()
                    .then((json) => setPrice(json)))
            }}>price</button>
            <li>PriceHigh: {price.high}</li>
        </ul>
	);
};

export default Stock;