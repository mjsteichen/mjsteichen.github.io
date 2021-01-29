import React from "react"
import "@fontsource/roboto"
import "./layout.css"

export default function Layout({ children }) {
  return <div id="layout-container">
    {children}
  </div>
}