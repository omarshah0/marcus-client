import React from "react"

import { Container } from "../../components/Common/Common.styles"
import { Section, Main } from "../../components/PostGrid/PostGrid.styles"
import Layout from "../../components/Layout"
import PageHelmet from "../../components/PageHemlemt"
import PostGrid from "../../components/PostGrid"

const HomePageTemplate = ({ pageContext: { post: posts } }) => {
  const canonicalUrl = `https://www.binarypakistan.com`
  return (
    <Layout>
      <PageHelmet
        title="BinaryPakistan - Pakistan's Best Blogging Network"
        url={canonicalUrl}
      />
      <Section>
        <Container>
          <Main>
            <PostGrid posts={posts} />
          </Main>
        </Container>
      </Section>
    </Layout>
  )
}

export default HomePageTemplate
