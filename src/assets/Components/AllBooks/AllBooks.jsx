import { use } from "react";

const AllBooks = ({ booksPromise }) => {
    const booksData = use(booksPromise);
    return (
        <div>
            <h1 className="font-bold text-2xl text-center">All Books</h1>
            {
                booksData.map((book, ind) => <Book key={ind} book={book} />)
            }

        </div>
    );
};

export default AllBooks;

const Book = ({ book }) => {
    return (
        <div>
        </div>
    )
};