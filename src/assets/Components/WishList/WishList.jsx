const WishList = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Wish List Books</h1>

        </div>
    );
};

export default WishList;

const WishListBook = () => {
    return (
        <div className="my-3">
            <div className="card card-side bg-base-100 shadow-sm">
                <div className="overflow-hidden rounded-2xl">
                    <img className="h-50 w-50 object-contain rounded-2xl"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}