import * as d3 from'd3'; 
import { sum } from 'd3';

import React, {useState, useEffect, useRef} from 'react';

export default function Pie({size, values, title, percents, pieDataColors}){
    

    const ref = useRef()




    useEffect(()=>{
        const svg = d3.select(ref.current)


            drawChart()

            
    }, [ values])



    const width = 500, 
            height=500




    function drawChart(){
        
        let pie = d3.pie()
     

        const svg = d3.select(ref.current).append("svg")
                        //maybe make a rectangle later
                        .attr("width", width)
                        .attr("height", height)
                        // .style("border", "1px solid black")
                        

            
        const innerRadius  = size/3
        const outerRadius = size/2
        let arc = d3.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(outerRadius)

        var color = d3.scaleOrdinal(d3.schemeCategory10);

        let arcs = svg.selectAll("g.arc")
                  .data(pie(values))
                  .enter()
                  .append("g")
                  .attr("class", "arc")
                  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")")
                  .attr("id", (d,i)=>{return d})
                  

        
            arcs.append("path")
            .attr("fill", function(d, i) {
                // return color(i);
                return pieDataColors[i]
            })
            .attr("d", arc)
            .attr("stroke", "black")
  

            // arcs.append("text")               
            //     .attr("transform", d=>{
            //         return "translate(" +arc.centroid(d) +")"
            //     })
            //     .attr("text-anchor", "middle")
            //     .text(d=> d)
            //     .data(labels)
            //     .enter()
                



    }

    return <> 

    <h5>{title}</h5>

    <div id="pieContainer">
            <svg ref={ref} style={{marginTop:"1px", marginLeft: "2px"}}/>
            <tbody id="pieTable"  >
                <tr>
                    <td style={{paddingLeft: "100px"}}>UnderWater</td>
                    <td className="pctCol" style={{paddingLeft: "10px"}}>{percents[0]}</td>
                </tr>
                <tr>
                    <td style={{paddingLeft: "100px"}}>OverWater</td>
                    <td className="pctCol" style={{paddingLeft: "10px"}}>{percents[1]}</td>
                </tr>
            </tbody>

    </div>
    {/* <svg /> */}
       

</>







}