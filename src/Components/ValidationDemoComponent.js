import {  useFormik } from "formik";
import React from 'react';

function ValidateUser(userdetails) {
    const errors = {};
    if (userdetails.Name === "") {
        errors.Name = "User Name Required";
    }
    if (userdetails.Email.indexOf("@") < 2) {
        errors.Email = "Invalid Email";
    }
    if (userdetails.Mobile.match(/\+91[0-9]{10}/)) {
        errors.Mobile = '';
    } else {
        errors.Mobile = "Invalid Mobile";
    }
    return errors;
}
export default function ValidationDemoComponent() {


    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Mobile: ''
        },
        validate: ValidateUser,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>

                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name}></input></dd>
                    <dd>{formik.errors.Name}</dd>

                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} value={formik.values.Email} /></dd>
                    <dd>{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} /></dd>
                    <dd>{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit" name="register" className="btn btn-primary">Register</button>
            </form>

        </div>
    )
}
