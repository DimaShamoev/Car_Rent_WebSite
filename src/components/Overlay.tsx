import React from 'react'
import useAsideAction from '../Hooks/useAsideAction'

const Overlay: React.FunctionComponent = () => {
    const { asideState, setAsideState } = useAsideAction();
  return (
    <div className={`overlay ${asideState ? 'active' : ''}`} onClick={setAsideState} >
        
    </div>
  )
}

export default Overlay;