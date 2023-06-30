const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', handleSearch);

const inputCoin = document.querySelector('#coin-input');
const titleCoin = document.querySelector('.coins-title');
const coinsList = document.querySelector('.coins')

function fetchAPI (coin) {
  // console.log('Pesquisou');
  const url = `https://api.exchangerate.host/latest?base=${coin}`
  return fetch(url)
  .then(response => response.json())
  .then((data) => data.rates);
}

function handleSearch () {
  const coin = inputCoin.value.toUpperCase();

  titleCoin.textContent = `Valores referentes a 1 ${coin}`;
  fetchAPI(coin)
  .then(renderCoins);
}

function renderCoins (coins) {
  // console.log(coins);
  coinsList.innerHTML = '';
  const coinsArray = Object.entries(coins);
  // console.log(coinsArray);

  coinsArray.map(([ coinName, coinValue ]) => {
    // console.log('Name', coinName);
    // console.log('Value', coinValue);

    const li = document.createElement('li');
    li.textContent = `${coinName} ${coinValue.toFixed(3)}`;
    coinsList.appendChild(li);
  })
}