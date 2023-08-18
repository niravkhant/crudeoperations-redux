import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchUser } from "../store/slices/UserDetailSlice";

const Navbar = () => {
    const totoalUsers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Redux CRUD
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Create Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/read">
                                    All Post({totoalUsers.length})
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex w-50" role="search">
                            <input
                                onChange={(e) => setSearchData(e.target.value)}
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
