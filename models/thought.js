const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                return new Intl.DateTimeFormat('en-US').format(timestamp);
            },
        },
    },
    {
        toJSON: { getters: true },
        id: false,
    }
);
