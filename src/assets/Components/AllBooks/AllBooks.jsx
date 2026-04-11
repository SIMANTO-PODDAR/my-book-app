import { use } from "react";
import { FcRating } from "react-icons/fc";

const AllBooks = ({ booksPromise }) => {
    const booksData = use(booksPromise);
    return (
        <div>
            <h1 className="font-bold text-2xl text-center mt-3">All Books</h1>

            <div className="grid grid-cols-3 mt-3 gap-4">
                {
                    booksData.map((book, ind) => <Book key={ind} book={book} />)
                }
            </div>

        </div>
    );
};

export default AllBooks;

const Book = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm w-96 h-150">
                <figure className="h-full w-full object-cover">
                    <img
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.bookName}
                        <div className="badge badge-secondary"><span className="text-2xl"><FcRating /></span>{book.rating}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="btn badge-outline">Details</div>
                    </div>
                </div>
            </div>
        </div>
    )
};