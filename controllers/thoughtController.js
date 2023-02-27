const { Thought, User } = require('../models');

//faillure feedback
const catchError = (res, error) => {
    res.status(404).json({ msg: `An Error occurred`, error });
};