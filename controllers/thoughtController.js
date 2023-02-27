const { Thought, User } = require('../models');

//faillure feedback
const catchError = (res, error) => {
    res.status(404).json({ msg: `An Error occurred`, error });
};
//developing a thought and allied it with a user established on the application body params.
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