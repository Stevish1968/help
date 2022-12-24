# help

I changed your modle to look like this so that I could loop over the catatories in the forms
==============================================================================================
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

======================================================================

Look at the changes I made in these files 
==========================================
index.js look for line with
app.get('/feedback/:id/feedback-edit',

========================================

I think that was about all I changed other then a few styles.
