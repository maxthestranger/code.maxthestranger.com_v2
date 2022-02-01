import * as React from 'react';
import Layout from "../layout/layout";

export default function About(){
    return(
        <Layout>
            <section className="container">
                <div className="post_content">
                    <h1 className="gradient gradient-yellow-pink">
                        Create. Share. Repeat.
                    </h1>
                    <div>
                        <p>I'm obsessed with side projects and <strong>building in public</strong>. Here you can navigate to <strong>70 different</strong> websites, apps, and libraries I built. Some projects are still active, others have been discontinued.</p>
                        <h2>Featured Projects</h2>
                        <p>Coming Soon...</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}