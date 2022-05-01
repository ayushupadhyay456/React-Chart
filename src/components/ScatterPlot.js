import React from "react";
import {Scatter} from 'react-chartjs-2'

const ScatterPlot=()=>
{
//The data of x anf=d y axis is being stored in a const which is later called
const data = {
    datasets: [{
      label:"Scatter datatset",
      data: [{
        x: 11,
        y: 0.6
      }, {
        x: 11.7,
        y: 1.0
      }, {
        x: 12,
        y: 2.0
      }, {
        x: 13,
        y: 2.5
      },
      {
          x:12.7,
          y:5
      },
      {
          x:11.5,
          y:3.7
      }
    
    ],
    
      backgroundColor: 'rgb(255, 99, 132)'
    }],
    
  };
  

    return (

       <div>
           <Scatter data={data}
           height={"500"}
           width={"500"}
           
           />
       </div>
      

    )
}

export default ScatterPlot