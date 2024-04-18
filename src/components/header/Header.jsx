import React from "react"
import logo from "../../assets/images/logo.svg"
import "./header.css"
import { User } from "./User"
import { Link } from "react-router-dom"
import { RiImageAddLine } from "react-icons/ri"

export const Header = () => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <a href="/"><img src={logo} alt='logo' width='150px' /></a>
          </div>
          <div className="create">
          <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
          </Link>
          </div>
          <div className='account'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
