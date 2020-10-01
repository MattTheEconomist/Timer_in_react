import React, {useState, useEffect} from "react";

export default function Clock(){
    const [timeRemaining, setTimeRemaining] = useState(5)

    useEffect(()=>{


       const timeId=  setTimeout(()=>{setTimeRemaining(prevTime=> prevTime-1)},1000)

        return ()=>{clearTimeout(timeId)}

    })

    let firstDigit = Math.floor(timeRemaining/60)
    let seconds = timeRemaining%60
    if(seconds<10){
        seconds = '0'+`${seconds}`
    }
    let formattedTime = `${firstDigit}:${seconds}`
    if (firstDigit<0){
        formattedTime= '0:00'
    }




    return <>
        <h5>Im a clock </h5>
        <h1>time remaining {formattedTime}</h1>
    </>
}