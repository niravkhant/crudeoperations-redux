import React from "react";
import "./skeleton.scss";

const Skeleton = () => {
    return (
        <>
            <div className="card is-loading w-50 mx-auto my-5">
                <div className="content">
                    <h2 />
                    <p />
                </div>
            </div>
        </>
    );
};

export default Skeleton;
