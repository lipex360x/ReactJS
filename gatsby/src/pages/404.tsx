import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage:React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>Não tem nada aqui</p>
    </Layout>
  )
}

export default NotFoundPage
