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
// search a user by identification
const findOneUser = async (req, res) => {
    try {
        const userDb = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends');
        res.status(200).json(userDb);
    } catch (error) {
        catchError(res, error);
    }
};
//search all users over the database
const findAllUsers = async (req, res) => {
    try {
        const userDb = await User.find({});
        res.status(200).json(userDb);
    } catch (error) {
        catchError(res, error);
    }
};
//remove a user by identification
const deleteUserById = async (req, res) => {
    try {
        const userDb = await User.findByIdAndDelete({
            _id: req.params.userId,
        });
        const deletedThoughts = await Thought.deleteMany({
            _id: { $in: userDb.thoughts },
        });
        res.status(200).json({
            userDb,
            deletedThoughts,
        });
    } catch (error) {
        catchError(res, error);
    }
};
// updating a user by identification
const updateUserById = async (req, res) => {
    try {
        const userDb = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(userDb);
    } catch (error) {
        catchError(res, error);
    }
};

module.exports = {
    createUser,
    findOneUser,
    findAllUsers,
    deleteUserById,
    updateUserById,
};