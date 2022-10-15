import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container button">
      <div className="component-input-container">
        <button className="component-button button-primary button">
          <span>
            <span>Log-in</span>
            <br></br>
          </span>
        </button>
      </div>
    </div>
  )
}

export default AppComponent
