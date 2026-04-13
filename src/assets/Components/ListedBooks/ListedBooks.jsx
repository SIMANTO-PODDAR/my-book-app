import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

import { useContext } from "react";
import { readListContext } from "../../Contexts/Contexts";

const ListedBooks = () => {

    const { readList, wishList } = useContext(readListContext);

    return (
        <div className="my-3">
            <div className="tabs tabs-lift">

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read list(${readList.length})`} defaultChecked />
                <div className={`tab-content bg-base-100 border-base-300 p-6`}>

                    <div className={` ${readList.length == 0 ? 'hidden' : ''}`}>

                        <ReadList />

                    </div>

                    <div className={` ${readList.length != 0 ? 'hidden' : 'text-center text-2xl font-bold'}`}>
                        No Book In Read List!
                    </div>
                </div>



                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wish list (${wishList.length})`} />
                <div className={`tab-content bg-base-100 border-base-300 p-6`}>

                    <div className={`
                        ${wishList.length == 0 ? 'hidden' : ''}`}>

                        <WishList />

                    </div>

                    <div className={` ${wishList.length != 0 ? 'hidden' : 'text-center text-2xl font-bold'}`}>
                        No Book In Wish List!
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;