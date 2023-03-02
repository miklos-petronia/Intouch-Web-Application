const router = require('express').Router();
const {
    findAllThoughts,
    findOneThought,
    createThought,
    deleteThoughtById,
    updateThoughtById,
} = require('../../controllers/thoughtController');

const {
    createReaction,
    deleteReactionById,
} = require('../../controllers/reactionController');