import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from "../Photo/Vector-back.svg"

const BackItem = () => {
 return (
  <>
   <Link to="/">
    <div className="product_view_back">
     <img src={backIcon} alt="Back" />
     <span>Back</span>
    </div>
   </Link>
  </>
 )
}

export default BackItem
