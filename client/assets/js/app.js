const myForm = document.querySelector('#search-bar');
myForm.addEventListener('submit', handleSubmit);
const dataList = document.querySelector('#websites');
const footer = document.querySelector('footer');

function handleSubmit(e) {
  e.preventDefault();
  const handleType = e.submitter.id;
  if (handleType === 'searchButton') {
    findWebsite(e);
  } else if (handleType === 'searchButtonRandom') {
    luckyWebsite(e);
  } else {
    console.log('Not sure what your calling here!?');
  }
}

function findWebsite(e) {
  console.log('EVENT HAPPENS');
  e.preventDefault();
  const keyword = e.target.search.value;
  console.log(`keyword: ${keyword}`);
  fetch(`http://localhost:3000/search/${keyword}`)
    .then((response) => response.json())
    .then(appendSearches)
    .catch(console.warn);
}

function getAllSearches() {
  fetch('http://localhost:3000/search')
    .then((response) => response.json())
    .then(appendSearches)
    .catch(console.warn);
}

function appendSearches(data) {
  dataList.innerHTML = '';
  console.log('FETCH HAPPENS');
  console.log(data.length);
  if (data.length !== 0) {
    data.forEach(appendSearch);
  } else {
    notFound();
  }
}

function appendSearch(data) {
  footer.classList.remove('fixed-bottom');
  console.log('APPEND HAPPENS');
  console.log(data);
  const websiteDiv = document.createElement('div');
  const websiteURL = document.createElement('p');
  const websiteTitle = document.createElement('a');
  const websiteDescription = document.createElement('p');

  let splitURL = data.url.replace('https://', '');
  splitURL = splitURL.split('/');
  splitURL = splitURL.join(' > ');

  websiteURL.textContent = splitURL;
  websiteURL.className = 'url';

  websiteTitle.href = data.url;
  websiteTitle.textContent = `${data.title}`;
  websiteTitle.className = 'title';

  websiteDescription.textContent = `${data.desc}`;
  websiteDescription.className = 'desc';

  websiteDiv.className = 'result';

  websiteDiv.append(websiteURL);
  websiteDiv.append(websiteTitle);
  websiteDiv.append(websiteDescription);

  dataList.append(websiteDiv);
}

function luckyWebsite(e) {
  console.log('EVENT HAPPENS');
  e.preventDefault();
  const keyword = e.target.search.value;
  fetch(`http://localhost:3000/search/${keyword}`)
    .then((response) => response.json())
    .then(luckySearch)
    .catch(console.warn);
}

function luckySearch(data) {
  dataList.innerHTML = '';
  console.log('FETCH HAPPENS');
  console.log(data.length);
  if (data.length !== 0) {
    const url = data[0].url;
    window.location.href = url;
  } else {
    notFound();
  }
}

function notFound() {
  footer.className = 'fixed-bottom';
  const errorMessage = document.createElement('h1');
  const gifImage = document.createElement('img');

  errorMessage.textContent = 'No results found.';
  errorMessage.className = 'text-center';

  gifImage.src = '../client/assets/images/notfound.gif';
  gifImage.className += 'rounded mx-auto d-block';

  dataList.append(errorMessage);
  dataList.append(gifImage);
}

module.exports = {
  handleSubmit,
  findWebsite,
  getAllSearches,
  appendSearches,
  appendSearches,
  luckyWebsite,
  luckySearch,
  notFound,
};
