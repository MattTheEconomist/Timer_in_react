import * as d3 from'd3'; 

import React, {useState, useEffect, useRef} from 'react';


export default function BarNext({width, height, inputData, other}){
    const [graphData, setGraphData] = useState()
    const [count, setCount]= useState(0)

   
    let prods =[]
    let colz = []
    let dataObj = {}

        // YOU CANNOT SET THE STATE. 
        useEffect(()=>{
            setGraphData(inputData)
        }, [inputData])


    
        useEffect(()=>{

            if(inputData.length>2){
                let tempRev = []
                if (typeof graphData[0] !=='undefined'){
                    //get all product values (used as keys in final data object)
                    for (const [key, value] of Object.entries(graphData)) {
                        prods.push(value.MailProduct)
                      }
                    // get all columns (used as values in final data object)
                    for(const[key, value] of Object.entries(graphData[0])){
                        colz.push(key)
                        }
                    //create final data object using keys and values
                    let temp = {}
                    for(let i=0; i<prods.length; i++){
                        let temp = {}
                        for(let g=0; g<colz.length; g++){
                        temp[colz[g]]=inputData[i][colz[g]]
                        }
                        dataObj[prods[i]]=temp
                        }
                    }
                }    
            
            
            console.log(dataObj)
        }, [inputData] )
        
   
   
            

            // if(count>1){
            //     return (
            //     <ul>
            //     { rev.map((row, ind)=>
            //         <li key={ind}>{row}</li>)
            //     }

            // </ul>)
            // }


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
