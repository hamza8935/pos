'use client'
import React, { useState } from 'react'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

export default function ParentHeader() {
  const [istrue, setistrue] = useState(false)
  const [isOpen, setisOpen] = useState(true)
  const [closeChildren, setcloseChildren] = useState(true)

  function openSidebar() {
    setistrue(!istrue)
  }
   function toggleClose() {
    setisOpen(!isOpen)
    setcloseChildren(!closeChildren)
  }
  return (
    <>

      <Header openSidebar={openSidebar} toggleClose={toggleClose} isOpen={isOpen} closeSideBar={istrue} />
      <Sidebar closeSideBar={istrue} isOpen={isOpen} />

    </>
  )
}
