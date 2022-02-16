const myApi = 'https://api.tvmaze.com/shows';

function setApi(url) {
  fetch(url).then((res) => res.json()).then((data) => {
    console.log(data);
  });
}

setApi(myApi);

export default setApi;