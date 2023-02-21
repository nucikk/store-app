import React from 'react'
import Navbar from '../Components/Navbar'
import "../Style/Dashboard.css"
import Store from './Store'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar/>
      <div className="store_content">
        <Store/>
      </div>
      <div className="bag"></div>
    </div>
  )
}

export default Dashboard
