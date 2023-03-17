import { useState } from "react";
import CardComponent from "./CardComponent";

export default function PropertiesDemoComponent() {

    const [products] = useState([{ Name: 'JBL Speaker', Price: 540.44, Photos: "b5img/ab1.jpg" }, { Name: "Samsung TV", Price: 444.33, Photos: 'b5img/ab2.jpg' }])

    return (
        <>
            <div className="container-fluid">
                <h3>Products Catalog</h3>
                <div className="d-flex flex-wrap">
                    {
                        products.map(product => 
                            <CardComponent Name={product.Name} Price={product.Price} Photos={product.Photos} />
                        )
                    }

                </div>
            </div>
        </>
    )
}