// import {handlePosts}from "./getPostDom";
const postContent = document.querySelector('#content');
const imgeUrl = document.querySelector('#imgUrl');
const submitBtn = document.querySelector('.submitBtn');
const mainContent = document.querySelector('.main-content');

const handleComment = (postContainer, item) => {
  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const firstComments = document.createElement('div');
  firstComments.classList.add('comments');

  const commentInput = document.createElement('div');
  commentInput.classList.add('comment-input');

  const commentInp = document.createElement('input');
  commentInp.setAttribute('type', 'text');
  commentInp.classList.add('commentInp');
  commentInp.setAttribute('placeholder', 'Comment...');

  //
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('type', 'submit');
  commentBtn.classList.add('commentBtn');

  const commentImg = document.createElement('img');
  commentImg.setAttribute('src', './img/commBtn.png');

  item.comments && item.comments.forEach((e) => createComment(commentsContainer, e, firstComments, item.username));

  commentBtn.appendChild(commentImg);

  commentInput.appendChild(commentInp);
  commentInput.appendChild(commentBtn);

  commentsContainer.appendChild(firstComments);
  commentsContainer.appendChild(commentInput);

  postContainer.appendChild(commentsContainer);
};

const handlePosts = (item) => {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  const postRow = document.createElement('div');
  postRow.classList.add('post-row');

  const secPostRow = document.createElement('div');
  secPostRow.classList.add('post-row1');

  const userProfile = document.createElement('div');
  userProfile.classList.add('user-profile');

  const profileImg = document.createElement('img');
  profileImg.src = './img/iconn.png';

  const namePoster = document.createElement('div');
  namePoster.classList.add('name-poster');

  const profileLink = document.createElement('a');
  profileLink.href = '../html/profile.html';
  profileLink.textContent = `${item.username}`;

  const postTime = document.createElement('span');
  postTime.textContent = `${item.created_at}`;

  const ellipsisLink = document.createElement('a');
  ellipsisLink.href = '#';

  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList.add('fas', 'fa-ellipsis-v');

  const postText = document.createElement('p');
  postText.classList.add('post-text');
  postText.textContent = `${item.content}`;

  const postImg = document.createElement('img');
  postImg.src = `${item.image}`;
  postImg.classList.add('post-img');

  const activityIcon = document.createElement('div');
  activityIcon.classList.add('activity-icon');

  const likesDiv = document.createElement('div');
  const likesIcon = document.createElement('img');
  likesIcon.src = './img/likee.png';
  const likesCount = document.createElement('div');
  likesCount.textContent = '120';
  likesDiv.appendChild(likesIcon);
  likesDiv.appendChild(likesCount);

  const commentsDiv = document.createElement('div');
  const commentsIcon = document.createElement('img');
  commentsIcon.src = './img/comm.png';
  const commentsCount = document.createElement('div');
  commentsCount.textContent = '35';
  commentsDiv.appendChild(commentsIcon);
  commentsDiv.appendChild(commentsCount);

  const sharesDiv = document.createElement('div');
  const sharesIcon = document.createElement('img');
  sharesIcon.src = '../img/sharee.png';
  const sharesCount = document.createElement('div');
  sharesCount.textContent = '20';
  sharesDiv.appendChild(sharesIcon);
  sharesDiv.appendChild(sharesCount);

  activityIcon.appendChild(likesDiv);
  activityIcon.appendChild(commentsDiv);
  activityIcon.appendChild(sharesDiv);

  namePoster.appendChild(profileLink);
  namePoster.appendChild(postTime);

  userProfile.appendChild(profileImg);
  userProfile.appendChild(namePoster);

  postRow.appendChild(userProfile);
  postRow.appendChild(ellipsisLink);
  secPostRow.appendChild(activityIcon);

  postContainer.appendChild(postRow);
  postContainer.appendChild(postText);
  postContainer.appendChild(postImg);
  postContainer.appendChild(secPostRow);

  handleComment(postContainer, item);
  mainContent.appendChild(postContainer);
};

const posts = [];

submitBtn.addEventListener('click', () => {
  fetch('/api/v1/posts/hhoo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: postContent.value,
      image: imgeUrl.value,
    }),
  }).then((res) => res.json()).then((res) => {
    posts.unshift(res.data);
    handlePosts(res.data);
  });
});
