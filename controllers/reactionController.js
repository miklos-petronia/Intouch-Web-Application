const { Thought } = require('../models');
//faillure feedback
const catchError = (res, error) => {
    res.status(500).json({ error });
};
//Developing a new feedback on an allied thought
const createReaction = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        catchError(res, error);
    }
};
//Removing a feedback on an allied thought
const deleteReactionById = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { runValidators: true, new: true }
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        catchError(res, error);
    }
};