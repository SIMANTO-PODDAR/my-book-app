import { createBrowserRouter } from "react-router";
import Root from "../assets/Root/Root";
import AllBooks from "../assets/Components/AllBooks/AllBooks";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: AllBooks }
        ]
    },
]);

export default router;