const { model } = require('mongoose');
const User = require('./User');
const bookSchema = require('./Book');

const Book = model('Book', bookSchema);


module.exports = { User, Book };
