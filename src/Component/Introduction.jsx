import React, { useState } from 'react'
import '../Component/Introduction.css'
import QuestinSection from './QuestinSection'

function Introduction() {
    const [showTitle, setshowTitle] = useState(true); // State to control displaying users row

    return (
        <div style={{ width: '100%'}} className='intoBox' onClick={()=>setshowTitle(false)}>
            {
                showTitle? <div className='bgc boxWithShadow'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo_Game_of_Thrones.png/800px-Logo_Game_of_Thrones.png" alt="" srcset="" /></div>

                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}><button  style={{ border: 'none', borderRadius: '10px', padding: '10px', backgroundColor: '#e7e7e7' }}>Start Game</button></div> */}
            </div> :  <div><QuestinSection /></div>
            }

           
        </div>
    )
}

export default Introduction