import React from 'react'

const EncodeForm = () => {
    return (
        <div className="form"> 
            <h1>Decode</h1>
            <div className="encode">
            <div>
                <label>Host Image</label>
                <input className="inp-cont" accept="image/*" type="file"/>        
            </div>
            <div>
                <label>Enter key</label>
                <input placeholder="Key" className="inp-cont"/>
            </div>
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <button>Extract</button>
            </div>
            </div>
        </div>
    )
}

export default EncodeForm
