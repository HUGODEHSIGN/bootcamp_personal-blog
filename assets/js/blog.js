const blogContainer = document.querySelector('#blog-container');

// init blogs array
let blogs = [];

// function to initialize blogs data
function init() {
  // get localstorage data
  const existingBlogs = localStorage.getItem('blogs');
  // don't run rest of function if there are no existing blogs
  if (!existingBlogs) {
    // user message so they don't get confused by empty page
    blogContainer.textContent = 'Please add blogs to view them here!';
    return;
  }
  // set blogs array to localstorage data
  blogs = JSON.parse(existingBlogs);
  // render blogs onto page
  displayBlogs();
}

// function to render blogs onto page
function displayBlogs() {
  // loop through each blog and display username, title, and content
  blogs.forEach(({ userName, title, content }) => {
    // create card
    const blogCard = document.createElement('div');
    // create title
    const cardTitle = document.createElement('h3');
    // set title string
    cardTitle.textContent = title;
    // append title into card
    blogCard.append(cardTitle);

    // content container holds the content and author
    const contentContainer = document.createElement('div');

    // create content paragraph
    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    // create author paragraph
    const cardName = document.createElement('p');
    cardName.textContent = userName;

    // content and author's name appended into content container
    contentContainer.append(cardContent);
    contentContainer.append(cardName);

    // content container appended into blog card
    blogCard.append(contentContainer);

    // blog card appended into blog container
    blogContainer.append(blogCard);
  });
}

// init function gets blog data from local storage
init();
