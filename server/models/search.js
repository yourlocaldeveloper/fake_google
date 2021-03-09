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
      return search;
    } catch (err) {
      throw new Error('No websites exist under this ID');
    }
  }

  static findByKeyword(keyword) {
    try {
      const searchData = websiteData.filter(
        (search) => search.keywords.indexOf(keyword) > -1
      );
      return searchData;
    } catch (err) {
      throw new Error(`No websites under this keyword: ${keyword}`);
    }
  }
}

module.exports = Search;
