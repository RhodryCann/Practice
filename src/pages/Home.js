import React, { useState } from "react";
import Stock from "../components/Stock";

const getAllStocks = () => (
    fetch("https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "5833e0152dmsh4d85cf98bb55712p149824jsnc0cb33c54d5d", //hide this key
			"x-rapidapi-host": "twelve-data1.p.rapidapi.com"
		}
	})
);

const Home = () => {
	const [stocks, setStocks] = useState([]);
    return (
		<div>
        	<button onClick={() => 
				getAllStocks()
					.then(response => response.json()
					.then(({ data }) => setStocks(data)))
			}>Refresh</button>
				{
					stocks.map(stock => 
						<Stock stock={stock}/>
					)
				}
		</div>
	);
};

export default Home;
