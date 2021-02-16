import React, { useState } from 'react'
import { FlexibleXYPlot, VerticalBarSeries, Hint } from 'react-vis'
import data from './bar.json'

function Bar() {
  const [hintValue, setHintValue] = useState(null)

  const handleHover = (d: any) => {
    setHintValue(d)
  }

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <h1>react-vis Bar</h1>
      <FlexibleXYPlot>
        <VerticalBarSeries
          data={data}
          style={{}}
          onValueMouseOver={handleHover}
          onValueMouseOut={() => setHintValue(null)}
        />
        {hintValue && (
          <Hint value={hintValue} style={{
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white'
          }}/>
        )}
      </FlexibleXYPlot>
    </div>
  )
}

export default Bar
