import { use } from "react";
import { Link, useParams } from "react-router";

const Book = ({ booksPromise }) => {
    const booksData = use(booksPromise);
    const { bookId } = useParams();

    const book = booksData.find((book) => book.bookId == bookId);

    return (
        <div className="flex justify-center m-5">
            <div className="card card-side bg-base-100 shadow-sm ">
                <div className=" w-96 h-150">
                    <figure className="h-full w-full object-cover">
                        <img
                            src={book.image}
                            alt={book.bookName} />
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                    <p className="w-100 text-justify">{book.review}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;

