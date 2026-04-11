const ListedBooks = () => {
    return (
        <div className="my-3">
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read list" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Read list</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish list" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Wish list</div>
            </div>
        </div>
    );
};

export default ListedBooks;