import { useContext } from "react";
import { readListContext } from "../../Contexts/Contexts";

const WishList = () => {
    const { wishList } = useContext(readListContext);
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Wish List Books</h1>
            {
                wishList.map((Book, ind) => <WishListBook key={ind} Book={Book} />)
            }

        </div>
    );
};

export default WishList;

const WishListBook = ({ Book }) => {
    return (
        <div className="my-3">
            <div className="card card-side bg-base-100 shadow-sm">
                <div className="overflow-hidden rounded-2xl">
                    <img className="h-25 w-50 object-contain rounded-2xl"
                        src={Book.image}
                        alt={Book.bookName} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{Book.bookName}</h2>
                    <p>Author: {Book.author}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}