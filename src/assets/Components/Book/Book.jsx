import { use } from "react";
import { Link, useParams } from "react-router";

import { useContext } from "react";
import { readListContext } from "../../Contexts/Contexts";

const Book = ({ booksPromise }) => {
    const booksData = use(booksPromise);
    const { bookId } = useParams();
    const book = booksData.find((book) => book.bookId == bookId);

    const { readList, setReadList, wishList, setWishList } = useContext(readListContext);

    const hReadList = ({ book }) => {
        if (readList.find(b => b.bookId == book.bookId)) {
            return alert(`"${book.bookName}" Already in Read List`)
        }
        else {

            if (wishList.find(b => b.bookId == book.bookId)) {
                const newWishList = wishList.filter(b => b.bookId != book.bookId)

                setWishList(newWishList);

                setReadList([...readList, book]);
                alert(`"${book.bookName}" Add to Read List 
                    and Removed From Wish List `)
            }
            else {
                setReadList([...readList, book]);
                alert(`"${book.bookName}" Add to Read List`)
            }




        }
    }

    const hWishList = ({ book }) => {
        if (readList.find(b => b.bookId == book.bookId)) {
            return alert(`"${book.bookName}" Can NOT add to Wish List because it is already on the Read List`)
        }
        if (wishList.find(b => b.bookId == book.bookId)) {
            return alert(`"${book.bookName}" Already in Wish List`)
        }
        else {
            setWishList([...wishList, book]);
            alert(`"${book.bookName}" Add to Wish List`)

        }
    }

    return (
        <>
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
                        <h3 className="text-xl font-bold">Author: {book.author}</h3>
                        <p className="w-100 text-justify">{book.review}</p>
                        <h3 className="text-xl">Category: {book.category}</h3>
                        <h3 className="text-xl">Tags:
                            {book.tags.map((tag, ind) =>
                                <span className="btn btn-info btn-sm mx-1" key={ind}>{tag}</span>)}
                        </h3>


                        <div className="card-actions justify-end items-center">
                            <p className="font-bold">Add to -</p>
                            <button onClick={() => hReadList({ book })} className="btn btn-success">Read list</button>
                            <button onClick={() => hWishList({ book })} className="btn btn-primary">Wish list</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/' className="btn flex justify-center">
                Go Back
            </Link>
        </>
    );
};

export default Book;

