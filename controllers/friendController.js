const { User } = require('../models');
//faillure feedback 
const catchError = (res, error) => {
    res.status(500).json({ error });
};

//updating friends by identification
const updateFriends = async (req, res, update) => {
    try {
        const userDb = await User.findOneAndUpdate(
            { _id: req.params.userId },
            update,
            { new: true }
        );
        res.status(200).json(userDb);
    } catch (error) {
        catchError(res, error);
    }
}
//adding friends by identification
const addFriend = async (req, res) => {
    const update = { $addToSet: { friends: req.params.friendId } };
    updateFriends(req, res, update);
};
//clear away a friend by identification
const removeFriend = async (req, res) => {
    const update = { $pull: { friends: req.params.friendId } };
    updateFriends(req, res, update);
};
//export to be utilized by the routes
module.exports = {
    addFriend,
    removeFriend,
};