const websiteData = require('../data');

let dataArray = [];

class Search {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.desc = data.desc;
    this.url = data.url;
    this.keywords = data.keywords;
  }

  static get all() {
    const searches = websiteData.map((search) => new Search(search));
    return searches;
  }

  static findById(id) {
    try {
      const searchData = websiteData.filter((search) => search.id === id)[0];
      const search = new Search(searchData);
      return searchData;
    } catch (err) {
      throw new Error('No websites exist under this ID');
    }
  }

  static findByKeyword(keyword) {
    try {
      websiteData.forEach((singleData) => {
        checkKeyword(singleData, keyword);
      });
      return dataArray;
    } catch (err) {
      throw new Error(`No websites under this keyword: ${keyword}`);
    }
  }

  checkKeyword(data, keyword) {
    const keywordArray = data.keywords;
    for (let i = 0; i < keywordArray.length; i++) {
      if (keyword === keywordArray[i]) {
        dataArray.append(data);
      } else {
        // do nothing
      }
    }
  }
}

module.export = Search;
