import React, { useState,useEffect } from 'react'

function QuestinSection() {
    const [number, setnumber] = useState([])
    const [currentIndex, setCurrentIndes] = useState(0)
    const [point, setPoint] = useState(0)
    const dev = () => {
        const data = [1, 2, 3, 4, 5];
        setnumber(data)
    }
    const showNextItem = () => {
        if (currentIndex < number?.length - 1) {
            setCurrentIndes(currentIndex + 1)
        } else {
            setCurrentIndes(0)
        }
    }
    const incrementPoint = () => {
        setPoint(point + 5)
    }
    const decrementPoint = () => {
        setPoint(point - 2)
    }
    useEffect(()=>{
        dev()
      },[])
    return (
        <div>
            <div className=''>
                {
                    number[currentIndex] && <p >{number[currentIndex]}</p>
                }
                <p>Point:{point}</p>
                <button onClick={() => showNextItem()}>Next</button>
                <button onClick={() => incrementPoint()}>point</button>
                <button onClick={() => decrementPoint()}>-ve</button>
            </div>
        </div>
    )
}

export default QuestinSection