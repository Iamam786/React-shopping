

export default function DataBindigWithLocalResoucres(){

    let Products = [
        {Name:'Jbl Speaker',Price:5000,Photos:'b5img/ab1.jpg'},
        {Name:'Nike Casulas',Price:2300,Photos:'b5img/ab2.jpg'},
    ]

    return(
        <>
        <div className="container-fluid">
        <table className="table">
            <thead className="table-head">
                <tr className="bg-success text-white">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Photos</th>
                </tr>
            </thead>
            <tbody>
                {
                    Products.map(product =>
                        <tr>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td><img alt="Preview" src={product.Photos} width="100" height="100"
                            ></img></td>
                        </tr>
                        )
                }
            </tbody>
        </table>
        </div>
        </>
    )
}