import React from 'react'
import ScatterPlot from './components/ScatterPlot'
import BarChart from './components/BarChart'
import './App.css'

const App = () => {
  return (
    <div  className='d-flex'>

      <h1>Implementation of Different Charts Using Charts.js</h1>
      <BarChart />
      <ScatterPlot/>
    </div>
  )
}

export default App
