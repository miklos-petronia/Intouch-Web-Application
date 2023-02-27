const { User, Thought } = require('../models');
//faillure feedback
const catchError = (res, error) => {
    res.status(500).json({ error });
};