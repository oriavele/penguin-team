import { AppContainer, WeeksContainer } from './App.styled'
import Button from './components/Button'
import { Navbar } from './components/Navbar'
// import { Dropdown } from './components/Dropdown/Dropdown'
import { useState } from 'react'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const projects = ['One Beyond', 'DCSL Guidesmiths', 'RBI', 'WaterScan']

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(32)

  const addOneToCurrentWeek = () => {
    if (currentWeek === 52) return
    setCurrentWeek(currentWeek + 1)
  }
  const takeOneFromCurrentWeek = () => {
    if (currentWeek === 1) return
    setCurrentWeek(currentWeek - 1)
  }

  return (
    <AppContainer>
      <Navbar>Timesheets</Navbar>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '16px 0',
          marginTop: 100
        }}
      >
        <div
          style={{
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: 16
          }}
        >
          <Button
            label="Copy last week"
            onClick={() => console.log('onClick')}
          />
          <Button
            label="Save as Template"
            onClick={() => console.log('onClick')}
            light
          />

          <WeeksContainer>
            <div>Week {currentWeek}</div>
            <div>
              <button
                style={{
                  height: 46,
                  borderLeft: '1px solid',
                  borderRight: '1px solid',
                  borderTop: 'transparent',
                  borderBottom: 'transparent',
                  width: 48,
                  cursor: 'pointer'
                }}
                onClick={takeOneFromCurrentWeek}
              >
                -
              </button>
              <button
                style={{
                  height: 46,
                  border: 'none',
                  width: 48,
                  cursor: 'pointer'
                }}
                onClick={addOneToCurrentWeek}
              >
                +
              </button>
            </div>
          </WeeksContainer>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ width: 200 }}>
            <p style={{ height: 24, display: 'flex', alignItems: 'center' }}>
              Select Project
            </p>
            {projects.map((p, i) => (
              <p
                style={{ height: 24, display: 'flex', alignItems: 'center' }}
                key={`${p}_col_`}
              >
                {p}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', flex: 1 }}>
            {days.map((day) => (
              <div style={{ flex: 1 }}>
                <p style={{ height: 24 }} key={day}>
                  {day}
                </p>
                {projects.map((p) => (
                  <div style={{ display: 'flex', height: 24 }}>
                    <input style={{ borderRadius: 0, width: 60 }} />
                    <button>+</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default App
