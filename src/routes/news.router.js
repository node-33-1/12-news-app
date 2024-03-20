const { getAll, create, getOne, remove, update } = require('../controllers/news.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const newsRouter = express.Router();

newsRouter.route('/news')
    .get(getAll)
    .post(verifyJWT, create);

newsRouter.route('/news/:id')
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = newsRouter;