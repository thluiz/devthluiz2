import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="blog-tags">
          <h1>{tagHeader}</h1>
          <ul className="tag-list">
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (                
                <li key={slug}>                  
                  <article className="post" key={node.frontmatter.slug}>
                  {node.frontmatter.img &&
                    node.frontmatter.img.childImageSharp &&
                    node.frontmatter.img.childImageSharp.gatsbyImageData && (
                      <Link
                        to={ "/" + node.frontmatter.slug}
                        className="post-thumbnail"
                        style={{
                          backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
                        }}
                      />
                    )}
                  <div className="post-content">
                    <h2 className="post-title">
                      <Link to={"/" + node.frontmatter.slug}>{node.frontmatter.title}</Link>
                    </h2>
                    <p>{node.excerpt}</p>
                    <span className="post-date">
                      {node.frontmatter.date}&nbsp;&nbsp;—&nbsp;
                    </span>
                    <span className="post-words">
                      {node.timeToRead} minute read
                    </span>
                  </div>
                </article>
              </li>
              )
            })}
          </ul>
          <span>
            <Link to="/tags">← All tags</Link>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title                       
            date(formatString: "MMMM DD, YYYY")
            slug
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
              }
            }
          }
        }
      }
    }
  }
`
