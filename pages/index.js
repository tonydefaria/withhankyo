// Index Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";

// Import the layout
import Layout from "../layouts/primary";

// Import SVGs
import Brand from "../svgs/brand";

export default function Index() {
  return (
    <Layout>
      <div className="brand">
        <div className="brand-box">
          <div className="brand-item">
            <Brand />
          </div>
        </div>
      </div>
      <hr className="separator-xxl" />
      <div className="page writer">
        <h1>Simplify your time.</h1>
        <p>At the core of everything we do lies a profound commitment to empower your projects. We do this because we want you to achieve results that truly matter to both you and your clients.</p>
        <p>We accomplish this by embracing a minimalist approach, making content management and web development an enjoyable experience. Our goal is to unleash your creative potential.</p>
        <p>The result? Hankyō, a Headless CMS crafted with love – a tool designed to support your upcoming micro and small projects.</p>
        <p>Launching in early 2024.</p>
       {/* <div class="ml-embedded" data-form="mQza1P"></div> */}
        <p className="font-size-m">By the way, "Hankyō" (反響) means "echo" or "resonance in Japanese".</p>
      </div>
    </Layout>
  );
}
