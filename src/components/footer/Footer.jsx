import React from "react"
import "./Footer.css"
import facebook from "../../assets/socials/facebook-rounded.svg"
import instagram from "../../assets/socials/instagram-rounded-svgrepo-com.svg"
import linkedin from "../../assets/socials/linkedin-rounded-svgrepo-com.svg"
import twitter from "../../assets/socials/twitter-x-logo-black-square-rounded-20852.svg"
export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container flex'>
          <p>Blogistan - Design & Developed by Karan Dugar</p>
          <div className='social'>
            <a target="_blank" href="https://www.facebook.com/"><img className = "icon" src={facebook} alt="f" /></a>
            <a target="_blank" href="https://www.instagram.com/karanxm__/"><img className = "icon" src={instagram} alt="i" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/karan-dugar-680b81237/"><img className = "icon" src={linkedin} alt="l" /></a>
            <a target="_blank" href="https://twitter.com/KaranDugar9"><img className = "icon" src={twitter} alt="x" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
