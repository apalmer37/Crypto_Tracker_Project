var apikey = {
    key:'e2be6378-63e0-4609-9ca9-1d299531be69'
}
    
request('GET','https://enigmatic-bayou-32442.herokuapp.com/'+'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
    var x1 = JSON.parse(r1.target.responseText);
    document.querySelector("#bitcoin").textContent = x1.data.max_supply;
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