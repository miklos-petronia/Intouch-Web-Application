const { User } = require('../models');
//Error Response
const catchError = (res, error) => {
    res.status(500).json({ error });
};