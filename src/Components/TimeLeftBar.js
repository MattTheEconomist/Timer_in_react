import React, { useState, useEffect, useRef} from "react";


export default function TimeLeftBar(props){
    const {timeLeft, startTime, status} = props
    const [totalTime, setTotalTime] = useState(timeLeft)

    const prevTotalTimeRef = useRef()


//look this over again, see if you can trim lines. 
//read full article https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
    useEffect(()=>{
        prevTotalTimeRef.current = totalTime
    })

    const prevTotalTime = prevTotalTimeRef.current


useEffect(()=>{
    if(!status){
        setTotalTime(prevTotalTimeRef.current)
    }else{
        setTotalTime(startTime)
        
    }

},[status,timeLeft ])
   


    return <>
    <div>
        totalTime NOW= {totalTime}
        <br></br>
        totalTime BEFORE= { prevTotalTimeRef.current}
        <br></br>
        timeLeft = {timeLeft}
        <br></br>
        status = {status}
        </div>     </>


}