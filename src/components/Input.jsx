import React, { useState } from "react";
import "../App.scss";

const Input = ({ label, onChange, errorMessage, ...otherProps }) => {
    const [focused, setFocused] = useState(false);
    return (
        <>
            <div className="inputField">
                <label>{label}</label>
                <input
                    {...otherProps}
                    onChange={onChange}
                    onBlur={() => setFocused(true)}
                    onFocus={() => otherProps.name == "confirmPassword" && setFocused(true)}
                    focused={focused.toString()}
                />
                <span>{errorMessage}</span>
            </div>
        </>
    );
};

export default Input;
