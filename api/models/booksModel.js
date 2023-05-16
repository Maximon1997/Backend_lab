module.exports = class customer {
    constructor(id, Title, Author, genre, release_year, available, borrowed) {
        this.id = id;
      this.Title = Title;
      this.Author = Author;
      this.genre = genre;
      this.release_year = release_year;
      this.available = available
      this.borrowed = borrowed
    }
  }
