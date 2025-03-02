// app.js  

// IIFE to encapsulate the code  
(function() {  
    // Constructor function for Book  
    function Book(title, author, year) {  
        this.title = title;  
        this.author = author;  
        this.year = year;  
    }  

    // Adding a method to the Book prototype  
    Book.prototype.getSummary = function() {  
        return `${this.title} by ${this.author}, published in ${this.year}`;  
    };  

    // Array of Book instances  
    const books = [  
        new Book('To Kill a Mockingbird', 'Harper Lee', 1960),  
        new Book('1984', 'George Orwell', 1949),  
        new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),  
        new Book('Moby Dick', 'Herman Melville', 1851),  
    ];  

    // Using Array.prototype.map to create an array of book summaries  
    const bookSummaries = books.map(book => book.getSummary());  

    // Logging the array of book summaries to the console  
    console.log(bookSummaries);  
})();  