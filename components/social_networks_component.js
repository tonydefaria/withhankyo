// social_networks Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

export default function SocialNetworksComponent() {
  return (
    <div className="social_networks">
      <h3>Follow us on</h3>
      <ul className="social_networks-box">
        <li className="social_networks-item">
          <a href="https://www.x.com/withhankyo" target="_blank" rel="noreferrer noopener" className="link-s underline">
            X
          </a>
        </li>
        <li className="social_networks-item">
          <a href="https://www.instagram.com/withhankyo" target="_blank" rel="noreferrer noopener" className="link-s underline">
            Instagram
          </a>
        </li>
        <li className="social_networks-item">
          <a href="https://www.facebook.com/withhankyo" target="_blank" rel="noreferrer noopener" className="link-s underline">
            Facebook
          </a>
        </li>
      </ul>
    </div>
  )
}
