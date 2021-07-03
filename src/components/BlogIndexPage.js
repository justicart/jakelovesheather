import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'

import mainPic from '../images/cropped-ChristmasMiniSession2020-1.jpeg';

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <img className={styles.mainPic} src={mainPic} alt="Jake and Heather being fancy" />
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
          <div className={styles.description}>{siteMetadata.description}</div>
        </h1>
        {/* <Bio /> */}
      </header>
      <div className={styles.content}>
        <div className={styles.container}>
          <ul className={styles.articlesList}>
            {postRoutes.map(route => (
              <li key={route.url.href}>
                <ArticleSummary blogRoot={blogRoot} route={route} />
              </li>
            ))}
          </ul>
          {pageCount > 1 && (
            <Pagination
              blogRoot={blogRoot}
              pageCount={pageCount}
              pageNumber={pageNumber}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogIndexPage
