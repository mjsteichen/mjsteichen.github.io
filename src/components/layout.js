import React from "react"
import "@fontsource/roboto"
import "./layout.css"
import SEO from "./seo"

export default function Layout({ children }) {
  return <div id="layout-container">
    <SEO></SEO>
    {children}
  </div>
}