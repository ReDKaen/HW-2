const books = [
    { 
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70 
    }, 
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    }, 
    { 
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    }, 
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

function isValidBook (book){
    if(!book.author || !book.name || !book.price){
        throw new Error(`invalid book ${JSON.stringify(book)}`)
    }
}

function displayBooks(books){
    const rootElement = document.getElementById("root")
    const ulElement = document.createElement("ul")
    books.forEach(book => {
        try{
            isValidBook(book)
            const liElement = document.createElement("li")
            liElement.textContent = `${book.name} від ${book.author}`
            ulElement.appendChild(liElement)
        } catch(error){
            console.error(error.message)
        }
    });
    rootElement.appendChild(ulElement)
}

displayBooks(books)