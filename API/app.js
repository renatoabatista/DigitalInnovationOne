var apikey = {
    key: '410c5350-af5b-44ab-82d6-5dd301ee8a24'
}
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) =>{
        if(!response.ok) throw new Error('Erro ao executar a solicitação, status ' + response.status);
        return response.json();
    })
    .then((api) =>{
        console.log(api);
    })
    .catch((error) => {
        console.error(error.message)
    });

