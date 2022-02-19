import './style.css';
import Icon from './images/icon.png';
import './likes.js';
import rendering from './rendering.js';
import { updateLikes, postLikes } from './displaylike.js';

import
{
  fetchMovies,
  userNameInput,
  userCommentInput,
  submissionFail,
  postCommentsBtn,
  mainContainer,
  bigCommentsDiv,
  detailsContainer,
}
from './utitls.js';

import
{
  openCommentsPopup,
  postComments,
  getComments,
  countComments,
}
from './comment.js';

const myIcon = new Image();
myIcon.src = Icon;
document.querySelector('.logo').appendChild(myIcon);

const starter = async () => {
  const data = await fetchMovies();
  await rendering(data);
};

starter();

mainContainer.addEventListener('click', async (event) => {
  if (event.target.className === 'common-btn') {
    const commentID = event.target.id;
    bigCommentsDiv.style.display = 'block';
    await openCommentsPopup(commentID);
    await getComments(commentID);
    await countComments(commentID);
  }
});

postCommentsBtn.addEventListener('click', async () => {
  if (userNameInput.value !== '' && userCommentInput.value !== '') {
    const commentID = +document.querySelector('.top-container').id;
    await postComments(commentID);
    await getComments(commentID);
    userNameInput.value = '';
    userCommentInput.value = '';
  } else {
    submissionFail.innerHTML = 'Submission failed. Please try again.';
  }
});

detailsContainer.addEventListener('click', (event) => {
  if (event.target.className === 'close-btn') {
    bigCommentsDiv.style.display = 'none';
  }
});

userNameInput.addEventListener('click', () => {
  submissionFail.innerHTML = '';
});

userCommentInput.addEventListener('click', () => {
  submissionFail.innerHTML = '';
});

mainContainer.addEventListener('click', async (e) => {
  if (e.target.className === 'fa fa-heart bot') {
    const str = e.target.id;
    const id = parseInt(str, 10);
    await postLikes(id);
    const container = e.target.parentElement.nextElementSibling;
    await updateLikes(id, container);
  }
});
