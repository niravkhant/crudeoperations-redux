import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../store/slices/UserDetailSlice";
import Skeleton from "./skeleton/Skeleton";
import CustomModel from "./CustomModel";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState();

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const { users, loading, searchData } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    return (
        <>
            <div className="mx-auto w-50 my-3">
                {showPopup && <CustomModel id={id} show={showPopup} onHide={() => setShowPopup(false)} />}

                <h3>All Data</h3>
                <legend className="col-form-label col-sm-3 pt-0">Filter By : </legend>
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    checked={radioData === ""}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label className="form-check-label">All</label>
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={radioData === "Male"}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label className="form-check-label">Male</label>
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={radioData === "Female"}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label className="form-check-label">Female</label>
            </div>

            {loading ? (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            ) : (
                users &&
                users
                    .filter((element) => {
                        if (searchData.length === 0) {
                            return element;
                        } else {
                            return element.name.toLowerCase().includes(searchData.toLowerCase());
                        }
                    })
                    .filter((element) => {
                        if (radioData === "Male") {
                            return element.gender === radioData;
                        } else if (radioData === "Female") {
                            return element.gender === radioData;
                        } else return element;
                    })

                    .map((element) => (
                        <div key={element.id} className="card mx-auto w-50 my-5">
                            <div className="card-body">
                                <h5 className="card-title">Name: {element.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Email: {element.email}</h6>
                                <p className="card-text">Gender:{element.gender}</p>

                                <button className="btn btn-primary" onClick={() => [setId(element.id), setShowPopup(true)]}>
                                    View
                                </button>

                                <Link to={`/update/${element.id}`}>
                                    <button className="btn btn-success mx-5">Edit</button>
                                </Link>

                                <button className="btn btn-danger" onClick={() => dispatch(deleteUser(element.id))}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
            )}
            <ToastContainer />
        </>
    );
};

export default Read;
