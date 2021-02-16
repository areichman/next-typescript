import React from 'react'
import { ResponsiveBarCanvas } from '@nivo/bar'
import data from './bar.json'

function BarPage() {
  const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']

  const barProps = {
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
    data,
    keys,
    indexBy: 'country',
    padding: 0.2,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16,
    xScale: { type: 'time', format: 'native' },
    axisBottom: {
      // format: (d: any) => new Date(d).toISOString()
    }
  }

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <h1>Nivo Bar</h1>
      <ResponsiveBarCanvas {...barProps} />
    </div>
  )
}

export default BarPage
