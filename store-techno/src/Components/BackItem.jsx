import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backIcon from "../Photo/Vector-back.svg"

const BackItem = () => {
 const navigate = useNavigate();
 return (
  <>
   <Link to="/">
    <div className="product_view_back" onClick={() => navigate(-1)}>
     <img src={backIcon} alt="Back" />
     <span>Back</span>
    </div>
   </Link>
  </>
 )
}

export default BackItem
