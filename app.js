var apikey = {
    key:'e2be6378-63e0-4609-9ca9-1d299531be69'
}
    
request('GET','https://enigmatic-bayou-32442.herokuapp.com/'+'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
    var x1 = JSON.parse(r1.target.responseText);
    document.querySelector("#bitcoinPrice").textContent = x1.data[0].quote.USD.price;
    document.querySelector("#bitcoinDay").textContent = x1.data[0].quote.USD.percent_change_24h;
    document.querySelector("#bitcoinVolume").textContent = x1.data[0].quote.USD.volume_24h;

    document.querySelector("#dogePrice").textContent = x1.data[6].quote.USD.price;
    document.querySelector("#dogeDay").textContent = x1.data[6].quote.USD.percent_change_24h;
    document.querySelector("#dogeVolume").textContent = x1.data[6].quote.USD.volume_24h;

    document.querySelector("#liteCoinPrice").textContent = x1.data[12].quote.USD.price;
    document.querySelector("#liteCoinDay").textContent = x1.data[12].quote.USD.percent_change_24h;
    document.querySelector("#liteCoinVolume").textContent = x1.data[12].quote.USD.volume_24h;

    document.querySelector("#sushiPrice").textContent = x1.data[72].quote.USD.price;
    document.querySelector("#sushiDay").textContent = x1.data[72].quote.USD.percent_change_24h;
    document.querySelector("#sushiVolume").textContent = x1.data[72].quote.USD.volume_24h;

    document.querySelector("#ethereumPrice").textContent = x1.data[1].quote.USD.price;
    document.querySelector("#ethereumDay").textContent = x1.data[1].quote.USD.percent_change_24h;
    document.querySelector("#ethereumVolume").textContent = x1.data[1].quote.USD.volume_24h;
    console.log(x1);
}).catch(err => {
    console.log(err);
})  
    
function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        });
}


fetch('https://www.reddit.com/r/CryptoCurrency/hot.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
    console.log("https://www.reddit.com" + data.data.children[2].data.permalink);
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
    
    
    
  });

 




 