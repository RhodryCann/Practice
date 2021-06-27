import React from "react";

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
    return (
        <button onClick={() => { console.log('clicked'); getStocks()}}>Refresh</button>
    );
};

export default Home;