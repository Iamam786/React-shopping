

export default function EventDemoComponent(){
    function InsertClick(SyntheticEvent){
        for (let property in SyntheticEvent.target) {
            document.write(property + "<br>");
            document.write("AbdeMustafa")
        }
    }

    return(
        <div className="container-fluid">
            <h2>Events Demo</h2>
            <button id="btnInsert" onClick={InsertClick} name="Insert" className="btn btn-primary">Insert</button>
        </div>
    )
}