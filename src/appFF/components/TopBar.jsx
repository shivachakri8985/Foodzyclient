import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
      <section className='topbarSection'>
        <div className="companyTitle">
            <Link to='/' className="link"
            ><h2 className='logo'><strong>FOODZY</strong></h2></Link>
        </div>
        <div className="searchBar">
            <input type='text' placeholder='search...'/>
        </div>
        <div className="userAuth">
            Login / SignUp
        </div>

      </section>
    </div>
  )
}

export default TopBar
