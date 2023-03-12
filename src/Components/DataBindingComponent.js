
export default function DataBindingComponent() {

    let Name = 'Samsung TV';
    let Price = 50000;
    let Stock = true;
    let Categories = ['Electronic', 'Footwear', 'Fashion'];
    let product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
    return (
        <>
    <h2>Object data Binding</h2>
    <h2>productl list</h2>
        <dl>
            <dt>id</dt>
            <dd>{product.id}</dd>
            <dt>title</dt>
            <dd>{product.title}</dd>
            <dt>image</dt>
            <dd><img src="{product.image}"></img></dd>
        </dl>

            <h2>Categories Table</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Categories.map(category =>
                            <tr>
                                <td>{category}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <h2>Data Binding</h2>
            <dl>
                <dt>{Name}</dt>
                <dt>{Price}</dt>
                <dt>{Stock}</dt>

            </dl>
            <h2>Categories list</h2>
            <ol>
                {Categories.map(category =>
                    <li key={category}>{category}</li>
                )
                }
            </ol>
            <h2>Select a Categories </h2>
            <ol>
                <select>

                    {Categories.map(category =>
                        <option key={category}>{category}</option>
                    )
                    }
                </select>
            </ol>
            <h2>Select a category </h2>
            <ul className="list-unstyled">


                {Categories.map(category =>
                    <option key={category}>{category}</option>
                )
                }

            </ul >
        </>
    )
}