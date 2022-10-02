const Movie = require('./Movie')

class MovieRepository {
    constructor() {
        this.movies = new Map([
            ["1", new Movie(1, "A New Hope")],
            ["2", new Movie(2, "The Empire Strikes Back")],
            ["3", new Movie(3, "Return of the Jedi")]
        ])
    }

    async fetchAll() {
        return [...this.movies.values()]
    }
}

module.exports = MovieRepository;
