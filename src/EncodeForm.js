import React, {useState} from 'react'

const EncodeForm = () => {

    const [Tab, setTab] = useState('Encode');
    const [Type, setType] = useState('Text')

    return (
        <div className="form"> 
            <div className="title-bar">
                <label>Steganography</label>
            </div>
            <div className="tab-bar">
                <div className={Tab==="Encode"?"tab current":"tab"} onClick={()=>setTab('Encode')}>
                    <label>Encode</label>
                </div>
                <div className={Tab==="Decode"?"tab current":"tab"} onClick={()=>setTab('Decode')}>
                    <label>Decode</label>
                </div>
            </div>
            {Tab === "Encode" ?
                <div className="encode">
                    <div>
                        <label>Host Image</label>
                        <input className="inp-cont" accept="image/*" type="file"/>        
                    </div>
                    <div>
                        <label>Enter data to hide</label>
                        <div style={{display:'flex'}}>
                            <select value={Type} onChange={(e)=>setType(e.target.value)}>
                                <option value="Text">Text</option>
                                <option value="Image">Image</option>
                            </select>
                            {Type==='Text'?<input className="inp-cont" placeholder="Plain Text"/>:<input className="inp-cont" accept="image/*" type="file"/>}
                             
                        </div>
                    </div>
                    <div>
                        <label>Enter key</label>
                        <input placeholder="Key" className="inp-cont"/>
                    </div>
                    <div style={{display: 'flex',justifyContent: 'center'}}>
                        <button>Insert</button>
                    </div>
                </div>
            :
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
            }

        </div>
    )
}

export default EncodeForm
