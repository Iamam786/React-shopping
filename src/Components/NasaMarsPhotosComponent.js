import { useEffect, useState } from "react"


export default function NasaMarsPhotosComponent() {

    const [marsdata, setmarsData] = useState({});

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(response => response.json()).then(data => {
                setmarsData(data);
                console.log(data.photos);
            })


    }, [])

    return (
        <div className="container-fluid">
            <h3>Mars Rower Photos</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Photo</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>

                    </tr>
                </thead>
                 <tbody>
                    {
                        marsdata.photos.map(item =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                           <td><img src={item.img_src} alt="preview" width={150} height="150" /></td>
                       <td>{item.camera.full_name}</td> 
                       <td>{item.camera.name}</td> 
                            </tr>)
                    }

                </tbody> 
            </table>
        </div>
    )
}