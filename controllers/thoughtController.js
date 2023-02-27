const { Thought, User } = require('../models');

//faillure feedback
const catchError = (res, error) => {
    res.status(404).json({ msg: `An Error occurred`, error });
};
//developing a thought and allied it with a user established on the application body premise.
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        const userDb = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
        );
        res.status(200).json({ thought, userDb });
    } catch (error) {
        catchError(res, error);
    }
};
//search a thought by identification
const findOneThought = async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
        res.status(200).json(thought);
    } catch (error) {
        catchError(res, error);
    }
};
//search all thoughts over the database
const findAllThoughts = async (req, res) => {
    try {
        const thought = await Thought.find({});
        res.status(200).json(thought);
    } catch (error) {
        catchError(res, error);
    }
};
//remove a thought by identification
const deleteThoughtById = async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete({
            _id: req.params.thoughtId,
        });
        res.status(200).json({ message: 'thought deleted!', deletedThought });
    } catch (error) {
        catchError(res, error);
    }
};
//updating a thought by identification
const updateThoughtById = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        catchError(res, error);
    }
};