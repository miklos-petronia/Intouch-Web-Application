const { User, Thought } = require('../models');
//faillure feedback
const catchError = (res, error) => {
    res.status(500).json({ error });
};
//developing a new User
const createUser = async (req, res) => {
    try {
        const userDb = await User.create(req.body);
        res.status(200).json(userDb);
    } catch (error) {
        catchError(res, error);
    }
};