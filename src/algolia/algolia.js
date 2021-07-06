import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import algoliasearch from "algoliasearch"

import Layout from "../components/Layout"
import { Container } from "../components/Common/Common.styles"

const Algolia = () => {
  const [modal, setModal] = useState(false)
  const [hits, setHits] = useState(null)
  const query = useStaticQuery(graphql`
    {
      allDatoCmsBlogpost {
        nodes {
          objectID: id
          title
          slug
        }
      }
    }
  `)
  const posts = query.allDatoCmsBlogpost.nodes
  const client = algoliasearch("C93Q4HML1U", "68107a2fc525c007e3171e1680ff662f")
  const index = client.initIndex("binaryPakistan")
  index.saveObjects(posts)
  ///////////////////////////////////////////////////////////////////////////////////
  const search = e => {
    index
      .search(e.target.value)
      .then(({ hits }) => {
        if (e.target.value === "") return setHits(null)
        if (hits.length !== 0) {
          return setHits(hits)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  ///////////////////////////////////////////////////////////////////////////////////
  return (
    <Layout>
      <div
        style={{
          marginTop: "2.1rem",
          minHeight: "80vh",
          padding: "5rem 0",
          background: "#F1F1F1",
        }}
      >
        <Container>
          <div>
            <h1>Algolia Page</h1>
            <button onClick={() => setModal(true)}>Search</button>
          </div>
        </Container>
      </div>
      {modal && (
        <div
          style={{
            position: "absolute",
            inset: "0",
            background: "rgba(142, 134, 215, 0.6)",
          }}
        >
          <input
            type="text"
            name="Search"
            id="Search"
            onChange={e => search(e)}
            style={{
              display: "block",
              margin: "5rem auto 0",
              fontSize: "2.4rem",
              color: "#5468ff",
              padding: "0 10px",
              width: "70%",
              height: "4rem",
              border: "none",
              borderRadius: "5px",
              boxShadow:
                "0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%)",
            }}
          />
          {hits &&
            hits.map(hit => {
              return (
                <div
                  key={hit.title}
                  style={{
                    background: "white",
                    margin: "0.5rem auto 0",
                    fontSize: "1rem",
                    color: "#5468ff",
                    padding: "20px 10px",
                    width: "70%",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow:
                      "0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%)",
                  }}
                >
                  <Link to={`/article/${hit.slug}`}>
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: hit._highlightResult.title.value,
                      }}
                    />
                  </Link>
                </div>
              )
            })}
          <div
            style={{
              width: "70%",
              margin: "1rem auto 0",
            }}
          >
            <button
              onClick={search}
              style={{
                float: "left",
                fontSize: "2rem",
                color: "#5468ff",
                padding: "0 10px",
                height: "4rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  "0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%)",
              }}
            >
              Search Results
            </button>
            <button
              onClick={() => setModal(false)}
              style={{
                float: "right",
                fontSize: "2rem",
                color: "#5468ff",
                padding: "0 10px",
                height: "4rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  "0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%)",
              }}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Algolia
