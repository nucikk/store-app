import React from 'react'
import Navbar from '../Components/Navbar'
import "../Style/Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar/>
      <div className="store_content"></div>
      <div className="bag"></div>
    </div>
  )
}

export default Dashboard
