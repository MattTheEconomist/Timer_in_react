import * as d3 from'd3'; 

import React, {useState, useEffect, useRef} from 'react';


export default function Bar({width, height, inputData, other}){
    const [graphData, setGraphData] = useState()
    const [rev, setRev] = useState([])
    const [count, setCount]= useState(0)

    let otherRev = []

        // YOU CANNOT SET THE STATE. 
        useEffect(()=>{
            //will not update state :(
            setGraphData(inputData)
            // console.log('graphData - state', graphData)
            console.log("inputData - props",inputData)
        }, [inputData])

        const ref = useRef()

    
        useEffect(()=>{
            if((inputData.length>2)&&(count<3)){
                //add functions to retrieve product names, pieces, and other info within the same loop :D
                let tempRev = []
                if (typeof graphData[0] !=='undefined'){
                    for(let i=0; i<graphData.length; i++){
                        tempRev.push(graphData[i].Revenue)
                    }
                setRev(tempRev)
                console.log("rev only", rev)
                
            }
            setCount(prev => prev+1)
            }
        }, )
        
   
   
            

            if(count>1){
                return (
                <ul>
                { rev.map((row, ind)=>
                    <li key={ind}>{row}</li>)
                }

            </ul>)
            }


    return <> 
        
        
            {/* <ul>
                { graphData.map((row, ind)=>
                    <li key={ind}>{row}</li>)
                }

            </ul> */}



            {/* <ul>
                {gotData && inputData.map((row, ind)=>
                    <li key={ind}>{row}</li>)
                }

            </ul> */}

        


        {/* <svg ref={ref}/> */}
            
    
    </>
    



    }
