// Book Constructor  
function Book(title, author, isAvailable = true) {  
    this.title = title;  
    this.author = author;  
    this.isAvailable = isAvailable;  
}  

// Member Constructor  
function Member(name, borrowedBooks = []) {  
    this.name = name;  
    this.borrowedBooks = borrowedBooks;  
}  

// Borrow Book Method for Member  
Member.prototype.borrowBook = function(book) {  
    if (book.isAvailable) {  
        if (this.borrowedBooks.length < 3) { // Regular members can borrow up to 3 books  
            book.isAvailable = false; // Mark the book as not available  
            this.borrowedBooks.push(book.title); // Add the book title to borrowedBooks  
            console.log(`${this.name} borrowed "${book.title}".`);  
        } else {  
            console.log(`${this.name} cannot borrow more than 3 books at a time.`);  
        }  
    } else {  
        console.log(`"${book.title}" is already borrowed.`);  
    }  
};  

// Premium Member Constructor  
function PremiumMember(name, borrowedBooks = []) {  
    Member.call(this, name, borrowedBooks); // Call the Member constructor  
    this.specialCollectionAccess = true; // Premium members have access to special collections  
}  

// Inherit from Member  
PremiumMember.prototype = Object.create(Member.prototype);  
PremiumMember.prototype.constructor = PremiumMember;  

// Override Borrow Book Method for PremiumMember  
PremiumMember.prototype.borrowBook = function(book) {  
    if (book.isAvailable) {  
        if (this.borrowedBooks.length < 5) { // Premium members can borrow up to 5 books  
            book.isAvailable = false; // Mark the book as not available  
            this.borrowedBooks.push(book.title); // Add the book title to borrowedBooks  
            console.log(`${this.name} borrowed "${book.title}".`);  
        } else {  
            console.log(`${this.name} cannot borrow more than 5 books at a time.`);  
        }  
    } else {  
        console.log(`"${book.title}" is already borrowed.`);  
    }  
};  

// Demonstrate the Functionality  
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");  
const book2 = new Book("1984", "George Orwell");  
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");  
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger");  
const book5 = new Book("The Hobbit", "J.R.R. Tolkien");  
const book6 = new Book("Moby Dick", "Herman Melville");  

const regularMember = new Member("Alice");  
const premiumMember = new PremiumMember("Bob");  

// Regular member borrowing books  
regularMember.borrowBook(book1);  
regularMember.borrowBook(book2);  
regularMember.borrowBook(book3);  
regularMember.borrowBook(book4); // Should not be able to borrow more than 3 books  

// Premium member borrowing books  
premiumMember.borrowBook(book1); // Should be successful  
premiumMember.borrowBook(book2); // Should be successful  
premiumMember.borrowBook(book3); // Should be successful  
premiumMember.borrowBook(book4); // Should be successful  
premiumMember.borrowBook(book5); // Should be successful  
premiumMember.borrowBook(book6); // Should not be able to borrow more than 5 books  

// Demonstrating use of bind  
const borrowBookForAlice = regularMember.borrowBook.bind(regularMember);  
borrowBookForAlice(book5); // Should log that Alice cannot borrow more than 3 books  