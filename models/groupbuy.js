const mongoose = require('mongoose');
const {Schema} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const GroupbuySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['keyboard', 'keycaps'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reddit: {
        type: String
    },
    geekhack: {
        type: String
    },
    link: {
        type: String
    },
    image: {
        type: String
    }
})

GroupbuySchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Groupbuy', GroupbuySchema)