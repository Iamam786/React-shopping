
import { useState } from "react";

export default function StyleBindingComponent() {

    const [color, setColor] = useState() //useState ke under '' ye {} ya kuchh bhi n ho koi fark nahi paddne wala
    const [background, setBackground] = useState('')

    function HandleBackground(event) {
        setBackground(event.target.value)
    }
    function HandleColor(event) {
        setColor(event.target.value)
    }
const [alignment,setTextalignment] = useState();

function HandleAlignment(event){
    setTextalignment(event.target.value);
}
  

    return (
        <>
            <div className="container-fluid mb-5">
                <h3>Select Styles</h3>
                <dl>
                    <dt>background Color</dt>
                    <dd>
                        <select className="form-select" onChange={HandleBackground}>
                            <option value='black'>Black</option>
                            <option value='red'>Red</option>
                            <option value='yellow'>Yellow</option>

                        </select>
                    </dd>
                    <dt>text Color</dt>
                    <dd>
                        <select className="form-select" onChange={HandleColor}>
                            <option value='black'>Black</option>
                            <option value='red'>Red</option>
                            <option value='yellow'>Yellow</option>

                        </select>
                    </dd>
                    <dt>Alignment</dt>
                    <dd >

                            <input onChange={HandleAlignment} type='radio' name='align' value='center' />center
                            <input onChange={HandleAlignment} type='radio' name='align' value='right' />right
                            <input onChange={HandleAlignment} type='radio' name='align' value='left' />left
                    </dd>
                    <h1 style={{ backgroundColor: background, color: color,textAlign:alignment }}>Style Binding in React</h1>
                </dl>
            </div>
        </>
    )
}