import React from 'react'
import useAsideAction from '../Hooks/useAsideAction';

const AsideMenu: React.FunctionComponent = () => {
  const { asideState, setAsideState } = useAsideAction();

  return (
    <div className={`Aside-menu ${asideState ? 'active' : ''}`}>
        <button onClick={setAsideState}>Close</button>
    </div>
  )
}

export default AsideMenu