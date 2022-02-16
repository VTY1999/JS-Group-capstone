import { updateLikes, countHomeMovies } from './displaylike.js';

const rendering = (movies) => {
  movies.forEach((e, index) => {
    const list = document.querySelector('.main');
    if (index < 16) {
      list.innerHTML += `
      <div class="grid-items">
        <ul class="image-card">
          <img class="movie-art" src="${e.image.medium}" alt="">
        </ul>
        <div class="subtitles">
          <h4>${e.name}</h4>    
          <span class="Like-container">
          <span><i id="${e.id}" class="fa fa-heart bot"></i></span>
          
          <input type="number" id="${e.id}" class="counter" value="" name="">
          
          <span id="${e.id}">Likes</span>
          </span>   
        </div>
        <div class="movie-btn">
          <button class="common-btn" id="${e.id}">Comments</i></button>
          
        </div> 
      </div>
    `;
    }
  });

  countHomeMovies();

  const cont = document.querySelectorAll('.counter');
  cont.forEach((input, index) => {
    const unique = index + 1;
    updateLikes(unique, input);
  });
};

export default rendering;