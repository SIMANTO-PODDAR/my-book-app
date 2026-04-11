import { createBrowserRouter } from "react-router";
import Root from "../assets/Root/Root";
import AllBooks from "../assets/Components/AllBooks/AllBooks";
import { Component, Suspense } from "react";
import Fallback from "../assets/Components/Fallback/Fallback";
import Book from "../assets/Components/Book/Book";
import NotFound from "../assets/Components/NotFound/NotFound";

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
                element:
                    <Suspense fallback={<Fallback />}>
                        <AllBooks booksPromise={booksPromise} />
                    </Suspense>

            },
            {
                path: "bookId/:bookId",
                element:
                    <Suspense fallback={<Fallback />}>
                        <Book booksPromise={booksPromise} />
                    </Suspense>
            },

        ]
    },
    {
        path: "*",
        Component: NotFound
    }

]);

export default router;