import React from 'react'
import '../Component/Introduction.css'
import End from '../Assets/gotendscore.png'

function AlertScroe({point}) {
    return (
        <div className='bgc boxWithShadow' onClick={()=>window.location.reload()}>
            <div className='bgImgScr' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column'}}>
            <h1 className='my-element textColor' style={{color:'gold'}}>GAME OVER</h1>
            <h1 className='my-element textColor' style={{color:'gold'}}>SCORE : <span style={{fontSize:'55px'}}>{point}</span></h1>
            </div>
        </div>
    )
}

export default AlertScroe