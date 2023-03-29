const { Shows } = require('../models/showModel');

const showController = {};

showController.getAllShows = async (req, res, next) => {
  try {
    res.locals.allShows = await Shows.find();
    return next();
  } catch (err) {
    return next({
      log: 'Error thrown in getAllShows middleware',
      message: { err: 'Error getting show data' },
    });
  }
};

module.exports = showController;
