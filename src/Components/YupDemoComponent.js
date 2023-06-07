import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

// const userValidationSchema = yup.object({
//     Name: yup.string().required('Name is requird'),
//     Email: yup.string().required('Email is required'),
//     Mobile: yup.string().required('Mobile Number Required')
// })

export default function YupDemoComponent() {

    // const userValidationSchema = yup.object({
    //     Name: yup.string().required('Name is requird'),
    //     Email: yup.string().required('Email is required'),
    //     Mobile: yup.string().required('Mobile Number Required')
    // })

    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Age: 0,
        },
        validationSchema: yup.object({
            Name: yup.string().required('Name is requird').min(2, "Name too Short...").max(6, "Name too long.."),
            Email: yup.string().required('Email is required'),
            Age: yup.number().required('Age Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form  onSubmit={formik.handleSubmit}>

                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="Name" {...formik.getFieldProps("Name")}></input></dd>
                    <dd className='text-danger'>{formik.touched.Name && formik.errors.Name?formik.errors.Name:null}
                    </dd>

                    <dt>Email</dt>
                    <dd><input type="text" {...formik.getFieldProps('Email')} name="Email" /></dd>
                    <dd className='text-danger'>{ formik.touched.Email && formik.errors.Email?formik.errors.Email:null}</dd>

                    <dt>Age</dt>
                    <dd><input type="text" name="Age" {...formik.getFieldProps("Age")} /></dd>
                    <dd className='text-danger'>{formik.touched.Age && formik.errors.Age?formik.errors.Age:null}</dd>

                </dl>
                <button type="submit" name="register" className="btn btn-primary" >Register</button>
            </form>

        </div>
    )
}
