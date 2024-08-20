const getTheTitles = function(books) {
    return books.reduce((bookTitles, currBook) => {
        bookTitles.push(currBook.title);
        return bookTitles;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
