import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import Logo from "../../assets/images/home.svg"
import './Home.css'
export const Home = () => {
  return (
    <>
      <div className="color"></div>
      <img className="home-svg"src={Logo} alt="" />
      <Category />
      <Card />
    </>
  )
}
