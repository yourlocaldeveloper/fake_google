const myForm = document.querySelector('#search-bar');
myForm.addEventListener('submit', handleSubmit);
const dataList = document.querySelector('#websites');

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
  console.log('APPEND HAPPENS');
  console.log(data);
  const websiteDiv = document.createElement('div');
  const websiteTitle = document.createElement('a');
  const websiteDescription = document.createElement('p');
  websiteTitle.href = data.url;
  websiteTitle.textContent = `${data.title}`;
  websiteDiv.append(websiteTitle);
  websiteDescription.textContent = `${data.desc}`;
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
  const errorMessage = document.createElement('h1');
  errorMessage.textContent = 'No results found :(';
  dataList.append(errorMessage);
}
