var apikey = {
    key: '410c5350-af5b-44ab-82d6-5dd301ee8a24'
}
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a solicitação, status ' + response.status);
        return response.json();
})
.then((api) => {
    var texto = "";
    for(let i = 0; i < 10; i++){
       texto = texto + `
        <div class="media">
            <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/bitcoin-icon.png" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            </div>
        </div>
   
        `;
        document.getElementById("coins").innerHTML = texto;
    }
})
.catch((error) => {
    console.error(error.message);
});