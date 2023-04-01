

export default function NetflixHeaderComponent() {

    return (
        <div>
            <div className="d-flex justify-content-between p-3">
                <div style={{ fontSize: '30px', color: 'red' }}>
                    NETFLIX
                </div>
                <div>

                    <div className="input-group">
                        <select className="input-group-text">
                            <option>Language</option>
                            <option>English</option>
                            <option>हिंदी</option>
                        </select>
                        <button className="btn btn-danger ms-2">SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}