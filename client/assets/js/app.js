function getAllSearches(){
    fetch('http://localhost:3000/search')
    .then(response=>response.json())
    .then(appendSearches)
    .catch(console.warn)
};

function appendSearches(data){
    data.forEach(appendSearch);
};

function appendSearch(data){
    const newLi = document.createElement('h1');
    newLi.textContent = `${data.title}`
    dataList.append(newLi);
};

const myForm = document.querySelector('#search-bar');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    const keyword = e.target.search;
    fetch(`http://localhost:3000/search/${keyword}`)
    .then(response=>response.json())
    .then(appendSearches)
    .catch(console.warn)
})
