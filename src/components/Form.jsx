import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [data, setData] = useState("Nirav Khant");

    const formField = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            autocomplete: "off",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "E-mail",
            label: "E-mail",
            required: true,
            autocomplete: "off",
            errorMessage: "It should be valid email address!",
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            autocomplete: "off",
            errorMessage: "Password should be 8-20 character and include atleast 1 letter, 1 number and 1 special character!",
            pattern: `(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$`,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            required: true,
            autocomplete: "off",
            errorMessage: "Password Not Matched!",
            pattern: values.password,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(values);
    };

    const changename = () => {
        data === "Nirav Khant" ? setData("Yesha Damor") : setData("Nirav Khant");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                {formField.map((element) => (
                    <Input key={element.id} {...element} onChange={onChange} value={values[element.name]} />
                ))}
                <button className="button">Submit</button>
            </form>

            <div className="container">
                <h1>{data}</h1>
                <button onClick={changename}>Click me</button>
            </div>
        </>
    );
};

export default Form;
