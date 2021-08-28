// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react'
import { graphql } from 'gatsby'

import config from '../../gatsby-config'
import { yearsSince } from '../utils/timeSince'
import Layout from '../components/layout'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className="content-box clearfix">      
      <h4>Hello!</h4>
        <p>
          I'm {config.siteMetadata.author}, {yearsSince(config.siteMetadata.birthDate)} years old. I've been programming since last century when spend hours staring at terminals with letters was just nerd (and it wasn't that cool). 
          I've started to be paid to program in the late ages of 2002 - when Javascript was a mess, and we call it DHTML 😜.
        </p>

        <p>
          After almost two decades, I think it's about time to start giving back to the software community that gave me so much for free over this time.
        </p>
      
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      limit: 2000) {      
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
