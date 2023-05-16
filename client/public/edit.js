document.addEventListener('DOMContentLoaded', loadBookIds)

async function loadBookIds() {
    const bookIdSelect = document.getElementById('bookId')

    const response = await fetch('http://localhost:3000/books/all')
    const data = await response.json()

    data.forEach((book) => {
        const option = document.createElement('option')
        option.value = book.id
        option.textContent = book.id
        bookIdSelect.appendChild(option)
    })
}
