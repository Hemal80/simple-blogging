const postsContainer = document.querySelector('.posts-grid');
const bcontentFolder = 'bcontent/';
const postFilenames = ['post1.html', 'post2.html', 'post3.html', 'post4.html', 'post5.html', 'post6.html', 'post7.html', 'post8.html', 'post9.html']; // Add your filenames here

function loadPosts() {
  postFilenames.forEach(filename => {
    fetch(`${bcontentFolder}${filename}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${filename}`);
        }
        return response.text();
      })
      .then(postContent => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = postContent;
        postsContainer.appendChild(postElement);
      })
      .catch(error => {
        console.error(`Error loading ${filename}:`, error);
      });
  });
}

window.addEventListener('load', loadPosts);

