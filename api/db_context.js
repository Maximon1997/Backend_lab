const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:admin@localhost:5433/library')

async function selectAllbooks() {
    let data = await db.many('SELECT * FROM books')
    return data
}

async function insertBook(
    Title,
    Author,
    genre,
    release_year,
    available,
    borrowed
) {
    await db
        .none(
            `INSERT INTO books("Title", "Author", genre, release_year, available, borrowed) VALUES('${Title}', '${Author}', '${genre}', ${release_year}, ${available}, ${borrowed})`
        )
        .catch((error) => {
            console.log('ERROR', error)
        })
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
    try {
        await db.none(
            `UPDATE books SET "Title" = $1, "Author" = $2, genre = $3, release_year = $4, available = $5, borrowed = $6 WHERE id = $7`,
            [Title, Author, genre, release_year, available, borrowed, id]
        )
        console.log('Book updated successfully.')
    } catch (error) {
        console.error('Error updating book:', error)
    }
}

async function deleteBook(id) {
    try {
        await db.none('DELETE FROM books WHERE id = $1', [id])
        console.log('Book deleted successfully.')
    } catch (error) {
        console.error('Error deleting book:', error)
    }
}

module.exports = {
    selectAllbooks,
    insertBook,
    editBook,
    deleteBook
}
