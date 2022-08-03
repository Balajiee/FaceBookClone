import React from 'react'
import "./Home.css"
import Feed from '../../Feed/Feed'
import RightBar from '../../RightBar/RightBar'
import SideBar from '../../SideBar/SideBar'
import TopBar from '../../TopBar/TopBar'

export default function Home() {
  return (
    <>
    <TopBar></TopBar>
    <div className="homeContainer">
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
    </div>
    </>
  )
}
