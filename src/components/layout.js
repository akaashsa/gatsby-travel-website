

import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <Header />
      
        <main>{children}</main>
        
    </>
  )
}


export default Layout
