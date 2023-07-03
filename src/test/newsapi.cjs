var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': 'U52rKSTXokWuwsF-oro-_XwwNVfgbD4vMWFooWBagsU'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});