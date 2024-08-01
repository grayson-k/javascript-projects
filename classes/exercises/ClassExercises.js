// Define your Book class here:
class Book {
    constructor(title, author, copyrightYear, isbn, numOfPages, numCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightYear = copyrightYear;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.numCheckedOut = numCheckedOut;
        this.discarded = discarded;
    }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor (title, author, copyrightYear, isbn, numOfPages, numCheckedOut, discarded) {
        super(title, author, copyrightYear, isbn, numOfPages, numCheckedOut, discarded);
    }

    dispose(currentYear){
        if (currentYear - this.copyrightYear > 5) {
            this.discarded = true;
        }
    }
}

class Manual extends Book {
    constructor (title, author, copyrightYear, isbn, numOfPages, numCheckedOut, discarded) {
        super(title, author, copyrightYear, isbn, numOfPages, numCheckedOut, discarded);
    }

    dispose() {
        if(this.numCheckedOut > 100) {
            this.discarded = true;
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, false)
let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false)

// Code exercises 4 & 5 here:
console.log(prideAndPrejudice);
console.log(topSecretShuttleBuildingManual);
topSecretShuttleBuildingManual.numCheckedOut = 5;
prideAndPrejudice.dispose(2024);
console.log(prideAndPrejudice);
console.log(topSecretShuttleBuildingManual);
