import React, { useState, useEffect } from "react";

const getStocks = () => (
    fetch("https://twelve-data1.p.rapidapi.com/stocks?exchange=LSE&format=json", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1ffa19187dmsha38e8760b594827p10c25djsn9cdeddb128a5",
			"x-rapidapi-host": "twelve-data1.p.rapidapi.com"
		}
	})
);

const Home = (props) => {
	const [stocks, setStocks] = useState([]);
	getStocks()
		.then(response => response.json()
		.then(({ data }) => setStocks(data)));
    return (
		<div>
        	<button onClick={() => alert('clicked')}>Refresh</button>
			<ul>
				{
					stocks.map(stock => 
						<li>{stock.currency}</li>
					)
				}
			</ul>
		</div>
	);
};

export default Home;
