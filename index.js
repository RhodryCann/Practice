import React from "react";
import ReactDOM from "react-dom";
// import Home from "./src/pages/Home";

//RapidAPI call
// fetch("https://twelve-data1.p.rapidapi.com/stocks?exchange=LSE&format=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "1ffa19187dmsha38e8760b594827p10c25djsn9cdeddb128a5",
// 		"x-rapidapi-host": "twelve-data1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


const refreshData = () => (
    console.log('been clicked')
);
const Home = () => (
    <button onClick={refreshData}>Refresh</button>
);

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);