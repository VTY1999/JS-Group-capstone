fetch('https://api.tvmaze.com/shows').then((data) => data.json()).then((completedata) => {
  let data1 = '';
  // eslint-disable-next-line array-callback-return
  completedata.map((values) => {
    data1 += `
        <div id="container">
        <div class="items">
        <img src=${values.image.medium} alt="img" class="item-image">
     <h3 class="name">${values.name}</h3>
     </div>
</div>`;
  });
  document.getElementById('container').innerHTML = data1;
}).catch((err) => err);