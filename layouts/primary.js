// Primary layout
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"

// Import custom components
import MetaComponent from "../components/meta_component";
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {
  return (
    <div className="primary" id="primary">
      <MetaComponent />
      <main className="universal main" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
      <footer className="universal footer" id="footer">
        <div className="universal-box">
          <div className="universal-row">
            <CopyrightComponent />
          </div>
        </div>
      </footer>
    </div>
  )
}
