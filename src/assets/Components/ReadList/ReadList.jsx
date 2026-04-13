import { useContext } from "react";
import { readListContext } from "../../Contexts/Contexts";

const ReadList = () => {
    const { readList } = useContext(readListContext);
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Read List Books</h1>
            {
                readList.map((Book, ind) => <ReadListBook key={ind} Book={Book} />)
            }

        </div>
    );
};

export default ReadList;

const ReadListBook = ({ Book }) => {
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