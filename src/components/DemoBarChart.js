import React from 'react'
import BarChart from 'components/charts/BarChart'

const DemoBarChart = props => (
  <div style={{width: '100%', height: '100%'}}>
    <BarChart xLabel='Character' yLabel='Frecuency' {...props} />
  </div>
)

export default DemoBarChart
