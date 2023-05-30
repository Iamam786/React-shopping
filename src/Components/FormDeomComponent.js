//lect Dec 10;

// import React from 'react'
import { useState } from 'react';
export default function FormDeomComponent() {
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState(0);
  const [City, setCity] = useState();
  const [Stock, setStock] = useState(false);

  function SubmitClick(e) {
    e.preventDefault();
    document.write(`Name=${Name}<br>Price=${Price}<br>City=${City}<br>Stock=${(Stock === true) ? "Avilable" : "Out Of Stock"}`);
  }

  return (
    <div className='container-fluid'>
      <h2>Register Product</h2>
      <form onSubmit={SubmitClick}>

        <dl>
          <dt>Name</dt>
          <dd><input type='text' value={Name} onChange={(e) => { setName(e.target.value) }} /></dd>
          <dt>Price</dt>
          <dd><input type='text' value={Price} onChange={(e) => { setPrice(e.target.value) }} /></dd>
          <dt>Shipped to</dt>
          <dd>
           
            <select  onChange={(e) => { setCity(e.target.value) }}>
              <option value='Delhi'>Delhi</option>
              <option value='Hyderabad'>Hyd</option>
            </select>
          </dd>
          <dt>Stock</dt>
          <dd className='form-switch'>
            <input type='checkbox' checked={Stock} onChange={(e) => { setStock(e.target.checked) }} className='form-check-input' />Availalable
          </dd>
        </dl>
        <button type='submit' className='btn btn-primary'>Register</button>
        <button type='reset' className='btn btn-primary'>Cancle</button>
      </form>

    </div>
  )
}
