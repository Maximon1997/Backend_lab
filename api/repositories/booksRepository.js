const booksModel = require('../models/booksModel')
const db_context = require('../db_context')

async function getAllbooks() {
    let books = []
    let data = await db_context.selectAllbooks()

    data.forEach((book) => {
        books.push(
            new booksModel(
                book.id,
                book.Title,
                book.Author,
                book.genre,
                book.release_year,
                book.available,
                book.borrowed
            )
        )
    })

    return books
}

async function addBook(
    Title,
    Author,
    genre,
    release_year,
    available,
    borrowed
) {
    db_context.insertBook(
        Title,
        Author,
        genre,
        release_year,
        available,
        borrowed
    )
}
async function editBook(
    id,
    Title,
    Author,
    genre,
    release_year,
    available,
    borrowed
) {
    await db_context.editBook(
        id,
        Title,
        Author,
        genre,
        release_year,
        available,
        borrowed
    )
}

async function deleteBook(id) {
    db_context.deleteBook(id)
}
module.exports = {
    getAllbooks,
    addBook,
    editBook,
    deleteBook
}
