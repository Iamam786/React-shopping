import React from "react";

export default function CardComponent(props) {
    return (
        <div className="card w-25 m-2">
            <img src={props.Photos} alt="Preview" className="card-img-top" height="200" />
            <div className="card-header" style={{height:'200px'}}>
                <h2>{props.Name}</h2>
                <p>{props.Price}</p>
                <p>{props.Category}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger w-100">
                    <span className="bi bi-cart4"></span> Add to Cart
                </button>

            </div>
        </div>
    )
}
