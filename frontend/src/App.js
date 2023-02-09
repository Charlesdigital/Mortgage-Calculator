import logo from './logo.svg';
import './App.css';
// import axios from "axios";
// import React, {useEffect} from 'React';

function App() {

  // const options = {
  //   method: 'GET',
  //   url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  //   params: {q: 'tesla', region: 'US'},
  //   headers: {
  //     'X-RapidAPI-Key': 'fa3caf02d1msh723fb8916116f8ap14b9fajsnba73d390648a',
  //     'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log("test1",response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });


  // const options = {
  //   method: 'POST',
  //   url: 'https://currentweatherconditions.p.rapidapi.com/',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': 'fa3caf02d1msh723fb8916116f8ap14b9fajsnba73d390648a',
  //     'X-RapidAPI-Host': 'currentweatherconditions.p.rapidapi.com'
  //   },
  //   data: '{"latitude":38.897096,"longitude":-77.036545}'
  // };


// const options = {
//   method: 'GET',
//   url: 'https://finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com/get-social-moving-averages/72h',
//   params: {social: 'twitter', tickers: 'PLTR,BTC-USD', timestamp: '24h', limit: '10'},
//   headers: {
//     'Content-Type': 'application/json',
//     'X-RapidAPI-Key': 'fa3caf02d1msh723fb8916116f8ap14b9fajsnba73d390648a',
//     'X-RapidAPI-Host': 'finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log("test1",response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': 'fa3caf02d1msh723fb8916116f8ap14b9fajsnba73d390648a',
		'X-RapidAPI-Host': 'finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com'
	}
};

fetch('https://finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com/get-social-list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
