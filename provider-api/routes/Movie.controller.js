const MovieRepository = require("./Movies.repo");

const repo = new MovieRepository();

exports.getAll = async (req, res) => {
    res.send(await repo.fetchAll());
}

exports.repo = repo;