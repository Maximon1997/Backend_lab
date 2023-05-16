const booksContainer = document.getElementById('books-container')
const search = document.getElementById('search')
const searchButton = document.getElementById('search-button')
let allBooks = []

fetch('http://localhost:3000/books/all')
    .then((response) => response.json())
    .then((data) => {
        allBooks = data
        displayBooks(allBooks)

        searchButton.addEventListener('click', () => {
            const searchResult = search.value.trim().toLowerCase()
            if (searchResult === '') {
                displayBooks(allBooks)
            } else {
                const filteredBooks = allBooks.filter((book) => {
                    const title = book.Title.toLowerCase()
                    const author = book.Author.toLowerCase()
                    return (
                        title.includes(searchResult) ||
                        author.includes(searchResult)
                    )
                })
                displayBooks(filteredBooks)
            }
        })
    })
    .catch((error) => {
        console.error('Error:', error)
    })

function displayBooks(books) {
    booksContainer.innerHTML = ''

    const table = document.createElement('table')
    table.classList.add('book-table')

    const tableHeader = document.createElement('tr')
    tableHeader.innerHTML = `
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Release Year</th>
        <th>Availability</th>
        <th>Borrowed</th>
    `
    table.appendChild(tableHeader)

    books.forEach((book) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.Title}</td>
            <td>${book.Author}</td>
            <td>${book.genre}</td>
            <td>${book.release_year}</td>
            <td>${book.available}</td>
            <td>${book.borrowed}</td>
        `
        table.appendChild(row)
    })

    booksContainer.appendChild(table)
}
function goToo(url) {
    window.location.href = url
}
