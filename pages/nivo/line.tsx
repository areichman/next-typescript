import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import data from './line.json'

function LinePage() {
  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <h1>Nivo Line</h1>

      <ResponsiveLine
        margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
        data={data}
        pointSize={8}
        pointBorderWidth={2}
        enableArea={true}
        useMesh={true}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 1 days',
        }}
      />
    </div>
  )
}

export default LinePage
