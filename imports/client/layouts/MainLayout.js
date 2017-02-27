import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div id="layout-wrapper">
      <h1>ZeugenTech Inc</h1>
      {children}
    </div>
  )
}

export default MainLayout
