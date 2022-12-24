const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({

    title: String,
    category: {
        type: String,
        lowercase: true,
        enum: ["feature","ui","ux","enhancement","bud"]
    },
    description: String,

})


module.exports = mongoose.model('Feedback', FeedbackSchema);