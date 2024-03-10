const blogContainer = document.querySelector('#blog-container');

let blogs = [];

function init() {
  const existingBlogs = localStorage.getItem('blogs');
  if (existingBlogs) {
    blogs = JSON.parse(existingBlogs);
  }
  console.log(blogs);
  displayBlogs();
}

function displayBlogs() {
  blogs.forEach(({ userName, title, content }) => {
    const blogCard = document.createElement('div');
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    blogCard.append(cardTitle);

    const contentContainer = document.createElement('div');

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    const cardName = document.createElement('p');
    cardName.textContent = userName;

    contentContainer.append(cardContent);
    contentContainer.append(cardName);

    blogCard.append(contentContainer);

    blogContainer.append(blogCard);
  });
}

init();
