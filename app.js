var apikey = {
    key: 'e2be6378-63e0-4609-9ca9-1d299531be69'
}

    request('GET', 'https://enigmatic-bayou-32442.herokuapp.com/' + 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
        .then((r1) => {
            var x1 = JSON.parse(r1.target.responseText);
            // Bitcoin //
            document.querySelector("#bitcoinprice").textContent = x1.data[0].quote.USD.price;
            document.querySelector("#bitcoinday").textContent = x1.data[0].quote.USD.percent_change_24h;
            document.querySelector("#bitcoinvolume").textContent = x1.data[0].quote.USD.volume_24h;
            // Dogecoin //
            document.querySelector("#bitcoinprice").textContent = x1.data[6].quote.USD.price;
            document.querySelector("#bitcoinday").textContent = x1.data[6].quote.USD.percent_change_24h;
            document.querySelector("#bitcoinvolume").textContent = x1.data[6].quote.USD.volume_24h;
            // Litecoin //
            document.querySelector("#bitcoinprice").textContent = x1.data[12].quote.USD.price;
            document.querySelector("#bitcoinday").textContent = x1.data[12].quote.USD.percent_change_24h;
            document.querySelector("#bitcoinvolume").textContent = x1.data[12].quote.USD.volume_24h;
            // SushiSwap //
            document.querySelector("#bitcoinprice").textContent = x1.data[72].quote.USD.price;
            document.querySelector("#bitcoinday").textContent = x1.data[72].quote.USD.percent_change_24h;
            document.querySelector("#bitcoinvolume").textContent = x1.data[72].quote.USD.volume_24h;
            // Ethereum //
            document.querySelector("#bitcoinprice").textContent = x1.data[1].quote.USD.price;
            document.querySelector("#bitcoinday").textContent = x1.data[1].quote.USD.percent_change_24h;
            document.querySelector("#bitcoinvolume").textContent = x1.data[1].quote.USD.volume_24h;



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