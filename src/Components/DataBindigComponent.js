
export default function DataBindingComponents() {

    let Name = "Samsung Tv";
    let Price = 45333;
    let City = "Hyd";

    let categroies = ['Professinonal', 'preson', 'Gender']
    return (


        <>
            <div className="container-fluid">
                <h2>Ca</h2>
                <ol>
                    {

                        categroies.map(categroy =>
                            <li>{categroy}</li>
                        )
                    }
                </ol>
            </div>
            <div className="container-fluid">
                <h2>Data Binding</h2>
                <ol>
                    {

                        categroies.map(categroy =>
                            <li>{categroy}</li>
                        )
                    }
                </ol>
            </div>
            <dl className="bg-success mb-5 p-4">
                <dt>Name</dt>
                <dd>{Name}</dd>
                <dt>Price</dt>
                <dd>{Price}</dd>
                <dt>City</dt>
                <dd>{City}</dd>
            </dl>
        </>
    )
}