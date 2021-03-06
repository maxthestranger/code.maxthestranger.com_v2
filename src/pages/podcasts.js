import * as React from "react"
import Layout from "../layouts/layout"

export default function Podcasts() {
  return (
    <Layout pageTitle="Podcasts">
      <section className="wrapper">
        <div className="post_content">
          <h1 className="gradient gradient-pink-purple">
            Ideas. Thoughts. Opinions.
          </h1>
          <div>
            {/* <p>Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called BaqByt.</p> */}
            <p>
              This is a corner for some great things to happen in the future
              with audio as a medium{" "}
            </p>
            <h2>Featured Podcasts</h2>
            <p>Coming Soon...</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
