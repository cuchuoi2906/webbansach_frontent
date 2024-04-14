import React from "react";
import Book from "../../Model/Book";
import BookProp from "./component/BookProp";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://titv.vn/../images/books/1.png',
        }
    ]
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map(
                        (book) => (
                            <BookProp bookprop={book} />
                        )
                    )
                }
            </div>
        </div>
    );
}
export default List;