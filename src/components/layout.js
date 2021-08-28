import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Sidebar from '.././components/sidebar'
import '../styles/main.scss'
import '../styles/fonts/font-awesome/css/font-awesome.min.css'

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            description
            social {
              twitter
              facebook
              linkedin
              github
              email
            }
          }
        }        
        tagsGroups: allMarkdownRemark(
            filter: { frontmatter: { draft: { eq: false } } }
          ) {      
          groupedTags: group(field: frontmatter___tags) {
            tag: fieldValue
            count: totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="wrapper">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Sidebar siteMetadata={data.site.siteMetadata} tags={data.tagsGroups.groupedTags} />
        {children}
      </div>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
