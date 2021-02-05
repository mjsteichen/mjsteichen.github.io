import React from "react"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { SocialIcon } from 'react-social-icons'
import { graphql } from "gatsby"
import "./index.css"
export default function Home({ data }) {
  return <Layout>
    <main>
      <h1 id="homepage--greeting">Hello!</h1>
      <div className="homepage--headshot-container">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="headshot"
          className="headshot"
        />
      </div>
      <div id="homepage--about">
        <p>I'm Michael Steichen, a software engineer living in Houston, Texas.</p>
        <p>Right now I work at StackWave where I build web applications and consult with biotech startups.</p>
      </div>
      <div id ="homepage--social">
        <SocialIcon url="https://www.linkedin.com/in/michaelsteichen/" className="homepage--social-icon" />
        <SocialIcon url="https://www.medium.com/" className="homepage--social-icon" />
        <SocialIcon url="https://github.com/mjsteichen" className="homepage--social-icon" />
      </div>
    </main>
  </Layout>
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "bwheadshot.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fixed(height: 200){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
