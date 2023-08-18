import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/slices/UserDetailSlice";
import { ToastContainer } from "react-toastify";

const Create = () => {
    const [users, setUsers] = useState({});

    const dispatch = useDispatch();

    const addData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        console.log(users);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
    };

    return (
        <div>
            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <h3>Fill the Data</h3>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={addData}
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={addData}
                            type="email"
                            className="form-control"
                            name="email"
                            id="inputEmail3"
                            placeholder="Enter Email"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="age" className="col-sm-2 col-form-label">
                        Age:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={addData}
                            type="number"
                            className="form-control"
                            name="age"
                            id="age"
                            placeholder="Enter Age"
                        />
                    </div>
                </div>

                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Male" onChange={addData} />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Female" onChange={addData} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Create;
