import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { updateUser } from "../store/slices/UserDetailSlice";

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const singleUser = users?.filter((element) => element.id === id);
            setUpdateData(singleUser[0]);
        }
    }, []);
    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    };
    return (
        <div>
            <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
                <h3>Edit the Data</h3>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={newData}
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            value={updateData && updateData.name}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={newData}
                            type="email"
                            className="form-control"
                            name="email"
                            id="inputEmail3"
                            placeholder="Enter Email"
                            value={updateData && updateData.email}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="age" className="col-sm-2 col-form-label">
                        Age:
                    </label>
                    <div className="col-sm-10">
                        <input
                            onChange={newData}
                            type="number"
                            className="form-control"
                            name="age"
                            id="age"
                            placeholder="Enter Age"
                            value={updateData && updateData.age}
                        />
                    </div>
                </div>

                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={newData}
                                checked={updateData && updateData.gender === "Male"}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={newData}
                                checked={updateData && updateData.gender === "Female"}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Update;
