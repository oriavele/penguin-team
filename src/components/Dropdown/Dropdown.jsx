import { useState } from 'react'
// import plusDark from '../../utils/plus_dark.svg'
// import plusLight from '../../utils/plus_light.svg'

export const Dropdown = ({ label, onClick, light, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)}>{label}</button>
      <div style={{ position: 'absolute' }} hidden={!open}>
        <div> </div>
      </div>
    </div>
  )
}

export default Dropdown
