import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import { ticks } from 'd3'

const Result = () =>{
    const [data] = useState([25,130,52,135,115,10,25])
    const svgRef = useRef()
    
    useEffect(()=>{
        //setting svg
        const w = 800;
        const h = 200;
        const svg = d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h)
                    .style('background','#d3d3d3')
                    .style('margin-top', '50px')
                    .style('overflow', 'visible')

        //setting the scaling 
        const xScale = d3.scaleLinear()
                       .domain([ 0, data.length]) 
                       .range([0,w]);

        const yScale = d3.scaleLinear()
                       .domain([0,h])
                       .range([h,0]);
         
        const generatingScaledLine = d3.line()
                                     .x((d,i) => xScale(i))
                                     .y(yScale)
                                     .curve(d3.curveCardinalOpen);   
        //setting axes
        const xAxis = d3.axisTop(xScale)
                      .ticks(data.length)
                      .tickFormat(i=>i+1);
        
        const yAxis = d3.axisLeft(yScale)
                      .ticks(7);
                      
        svg.append('g')
           .call(xAxis)
           .attr('transform',`translate(0,${h})`)
           
        svg.append('g')
            .call(yAxis);

        //setting up the data for the svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
                .attr('d', d => generatingScaledLine(d))
                .attr('fill', 'none')
                .attr('stroke', 'black');
    }, [data])

    return (
        <div>
            <h1>D3 JS Component</h1>
            <p>Demo Graph</p>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default Result
