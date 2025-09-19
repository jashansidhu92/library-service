export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    isBorrowed: boolean;
}

const books: Book[] = [
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", isBorrowed: false },
    { id: "2", title: "1984", author: "George Orwell", genre: "Dystopian", isBorrowed: false },
    { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", isBorrowed: true },
    { id: "4", title: "Moby Dick", author: "Herman Melville", genre: "Adventure", isBorrowed: false },
];

export const getAllBooks = (): Book[] => {
    return structuredClone(books);
};