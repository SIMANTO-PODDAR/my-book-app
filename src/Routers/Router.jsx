import { createBrowserRouter } from "react-router";
import Root from "../assets/Root/Root";
import AllBooks from "../assets/Components/AllBooks/AllBooks";
import { Suspense } from "react";
import Fallback from "../assets/Components/Fallback/Fallback";

const booksData = async () => {
    const res = await fetch('/booksData.json');
    return res.json();
};

const booksPromise = booksData();

const router = createBrowserRouter([

    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Fallback />}>

                    <AllBooks booksPromise={booksPromise} />

                </Suspense>

            }
        ]
    },
]);

export default router;