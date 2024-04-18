import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src={require('../../assets/images/profile.jpeg')} alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src={require('../../assets/images/profile.jpeg')} alt='' />
                    </div>
                    <div className='text'>
                      <h4>Karan Dugar</h4>
                      <label>Vellore, Tamil Nadu</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/account'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <a href='https://karan2721.github.io/Portfolio_WEBP/index.html' target='_blank' rel='noopener noreferrer'>
                  <button className='box'>
                    <GrHelp className='icon' />
                    <h4>About Me</h4>
                  </button>
                </a>
                <Link to='/login'>
                  <button className='box'>
                    <BiLogOut className='icon' />
                    <h4>Log Out</h4>
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
