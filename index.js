let posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.querySelector("#main-container");
const heartBtns = document.querySelectorAll(".heart-icon");

let instaPostsEl = "";

render();

mainEl.innerHTML = instaPostsEl;

render();

function render() {
  posts.forEach((post) => {
    instaPostsEl += `<section>
        <div class="container">
          <div class="profile-container">
            <div>
              <img
                class="rounded-img"
                src=${post.avatar}
                alt=""
              />
            </div>
            <div>
              <h3>${post.name}</h3>
              <p>${post.location}</p>
            </div>
          </div>
          <div>
            <img src=${post.post} alt=${post.name} class="large-img" />
          </div>
          <div class="social-icons">
            <img
              src="./images/icon-heart.png"
              alt="heart icon"
              class="social-icons-img heart-icon"
              id=${post.username}
            /><img
              src="./images/icon-comment.png"
              alt="comment icon"
              class="social-icons-img"
            /><img
              src="./images/icon-dm.png"
              alt="direct-message icon"
              class="social-icons-img"
            />
          </div>
          <h3 class="likes-count">${post.likes} likes</h3>

          <p><span>vincey1853</span>${post.comment}</p>
        </div>
      </section>`;
  });
}
