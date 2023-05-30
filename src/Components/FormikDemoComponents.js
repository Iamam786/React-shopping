import React from 'react'
import { useFormik } from 'formik';

export default function FormikDemoComponents() {
  const formik = useFormik({
    initialValues:{
        Name:'',
        Price:0,
        City:'',
        Stock:false
    },
    onSubmit:values=>{
        alert(JSON.stringify(values));
    }
  })
    return (
        <div className='container-fluid'>
          <h2>Register Product</h2>
          <form onSubmit={formik.handleSubmit}>
    
            <dl>
              <dt>Name</dt>
              <dd><input type='text'name='Name' onChange={formik.handleChange} value={formik.values.Name}  /></dd>
              <dt>Price</dt>
              <dd><input type='text' name='Price' value={formik.values.Price} onChange={formik.handleChange} /></dd>
              <dt>Shipped to</dt>
              <dd>
               
                <select name='City' onChange={formik.handleChange} >
                  <option value='Delhi'>Delhi</option>
                  <option value='Hyderabad'>Hyd</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className='form-switch'>
                <input type='checkbox' name='Stock' checked={formik.values.Stock} onChange={formik.handleChange} className='form-check-input' />Availalable
              </dd>
            </dl>
            <button type='submit' name='register' className='btn btn-primary'>Register</button>
            {/* <button type='submit' name='post' className='btn btn-primary'>Post</button> */}
          
          </form>
    
        </div>
      )
}
