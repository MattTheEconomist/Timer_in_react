import * as d3 from'd3'; 

import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';


export default function Bar({width, height, labels, values, title }){
    const [newData, setNewData] = useState(false)
    

    const ref = useRef()

    let barWidth = 20
    const margin = ({top: 20, right: 30, bottom: 30, left: 40, bar:60})

    useLayoutEffect(()=>{
        d3.selectAll("g").remove()
        d3.selectAll("rect").remove()

    }, [labels, values])
    


    useEffect(()=>{

        drawChart()



    }, [labels, values])





    function drawChart(){
        

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")




        let selection = svg.selectAll("rect").data(values)


        selection
        .exit()
        .transition().duration(600)
        .attr("y", (d) => height)
        .attr("height", 0)
        .remove()
  


        let yScale = d3.scaleLinear()
        .domain([0, d3.max(values)])
        .range([margin.top, height-margin.bottom]);

        let yAxisScale = d3.scaleLinear()
        .domain([0, d3.max(values)])
        .range([height-margin.top,0]);


        let xScale = d3.scaleBand()
        .domain(labels)
        .range([40,width-margin.right])

        let barScale = d3.scaleLinear()
        .domain([0, values.length])
        .range([60,width-10])





        let xAxis = d3.axisBottom()
            .scale(xScale)

        let yAxis = d3.axisLeft()
                    .scale(yAxisScale)

        //xaxis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (height-margin.bottom) + ")")
           
            .call(xAxis)
            .selectAll("text")
            .attr("transform", "rotate(10)")
            .style("text-anchor", "start");

        //yaxis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(yAxis)


        //data  - bars
        selection
        .enter()
        .append("rect")
        // .attr("x", (d, i) => (i*(width/values.length))+margin.left)
        .attr("x", (d, i) => barScale(i) )
        .attr("y", (d) => height - yScale(d)-margin.bottom)
        .attr("width", barWidth)
        .attr("height", d=> yScale(d))
        .attr("class", "rect")
        .attr("fill", "red")
        .attr("id", d=> d)
      







    }
        
   
            

            
    return <> 
        <h5>{title}</h5>
        <svg ref={ref}/>
        {/* <svg /> */}
           
    
    </>
    



    }
