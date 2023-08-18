import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
