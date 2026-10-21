import React from 'react'

const MainLayout = () => {
  return (
    <div>
      <nav>nav</nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
