import React from 'react'
import "../Style/Dashboard.css"

/* Importing the components from the components folder. */
import Navbar from '../Components/Navbar'
import Store from './Store'

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Navbar/>
      <div className="store_content">
      <Store />

      </div>

    </div>
  )
}

export default Dashboard
