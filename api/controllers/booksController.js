const {
    getAllbooks,
    addBook,
    deleteBook,
    editBook
} = require('../repositories/booksRepository')

async function get(req, res) {
    let data = await getAllbooks()

    return res.json(data)
}
async function remove(req, res) {
    const id = req.query.id
    await deleteBook(id)
}

async function edit(req, res) {
    const { id, Title, Author, genre, releaseYear, available, borrowed } = req.body
    await editBook(id, Title, Author, genre, releaseYear, available, borrowed)
}


async function add(req, res) {
    const { Title, Author, genre, releaseYear, available, borrowed } = req.body
    await addBook(Title, Author, genre, releaseYear, available, borrowed)
}

module.exports = {
    get,
    add,
    remove,
    edit
}
