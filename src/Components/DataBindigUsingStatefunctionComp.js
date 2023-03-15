
// import React from "react";

import { useState } from "react";

export default function StateFunctionComponent() {
    const [product, setProduct] = useState({ Name: '', Price: 0, City: '', Stock: false });

    function HandleNameChange(event) {
        setProduct({
            Name: event.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function HandlePriceChange(event) {
        setProduct({
            Name: product.Name,
            Price: event.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function HandleCityChange(event) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: event.target.value,
            Stock: product.Stock
        })
    }

    function HandleStockChange(event) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: event.target.checked
        })
    }


    const [newProduct, setNewProduct] = useState({});

    function HandleRegisterClick() {
        setNewProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock,

        })
    }

    const [themeName, setTheme] = useState({})
    function HandleThemeChange(event) {
        if (event.target.checked) {
            setTheme({
                backgroundColor: 'black',
                color: 'white'
            })
        } else {
            setTheme({
                backgroundColor: 'yellow',
                color: 'white'
            })
        }
    }

    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-3">
                        <h3>Register Products</h3>
                        <dl>
                            <dt>Name</dt>
                            <dd><input type="text" onKeyUp={HandleNameChange} className="form-control"></input></dd>
                            <dt>Price</dt>
                            <dd><input type="number" onKeyUp={HandlePriceChange} className="form-control"></input></dd>
                            <dt>Shipped To</dt>
                            <dd>
                                <select onChange={HandleCityChange} className="form-select">
                                    <option>Lko</option>
                                    <option>Del</option>
                                    <option>Hyd</option>
                                </select>
                            </dd>
                            <dt>Stock</dt>
                            <dd className="form-switch"><input type='checkbox' onChange={HandleStockChange} className="form-check-input" ></input>Avilable</dd>
                        </dl>
                        <button className="btn btn-primary w-100" onClick={HandleRegisterClick}>Register</button>

                    </div>
                    <div className="col-4">
                        <h3>Details Of Products</h3>
                        <dl>
                            <dt>Name</dt>
                            <dd>{product.Name}</dd>

                            <dt>Price</dt>
                            <dd>{product.Price}</dd>
                            <dt>City</dt>
                            <dd>{product.City}</dd>

                            <dt>Stock</dt>
                            <dd style={{ backgroundColor: "red", color: "white" }}>{(product.Stock === true) ? "Avilable" : "Out Of Stock"}</dd>

                        </dl>
                    </div>


                    <div className="col-4">
                        <div className="form-switch" >
                            <input type='checkbox' onChange={HandleThemeChange} className="form-check-input me-2"></input>Dark Theme
                        </div>
                        <h3>Details Of New Products</h3>
                        <dl>
                            <dt>Name</dt>
                            <dd>{newProduct.Name}</dd>

                            <dt>Price</dt>
                            <dd>{newProduct.Price}</dd>
                            <dt>City</dt>
                            <dd>{newProduct.City}</dd>

                            <dt>Stock</dt>
                            <dd>{(newProduct.Stock === true) ? "Avilable" : "Out Of Stock"}</dd>

                        </dl>


                    </div>
                </div>


            </div>
    
        </>
    )
}