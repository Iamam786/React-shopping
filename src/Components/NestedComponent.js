
export default function NestedComponent() {
    let categories = [
        { categroy: 'Electronic', Products: ['Samsung', 'Mobile'] },
        { categroy: 'Footwear', Products: ['Nike Casuals', 'Lee Coopes Boot'] }
    ];
    return (

        <>
            <h2>Select a Product</h2>
            <select >
                {
                    categories.map(item =>
                        <optgroup key={item.categroy} label={item.categroy}>
                            {
                                item.Products.map(product =>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>

                    )
                }
            </select>
            <h2>Nested Iterations</h2>
            <ol>
                {
                    categories.map(item =>
                        <li>{item.categroy}
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li>{product}</li>
                                    )

                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
        </>
    )
}