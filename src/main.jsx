import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx";
import "bootstrap/scss/bootstrap.scss";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Create />,
            },
            {
                path: "/read",
                element: <Read />,
            },
            {
                path: "/update/:id",
                element: <Update />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
