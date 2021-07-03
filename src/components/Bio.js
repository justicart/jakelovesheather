import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      {/* <img src={photoURL} alt="Me" /> */}
      <p>
        See photos of our wanderings on our Instagram accounts:
        <br />
        <a href="https://www.instagram.com/heathcoat7/">@heathcoat7</a>{' '}
        <a href="https://www.instagram.com/mrjakehamblin/">@mrjakehamblin</a>{' '}
        <a href="https://www.instagram.com/travel_me_crazy/">@travel_me_crazy</a>{' '}
      </p>
    </div>
  )
}

export default Bio
