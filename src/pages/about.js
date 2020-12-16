import React from "react"
import styles from "./about.module.css"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout>
      <Container>
        <div style={{ color: `teal` }}>
          <Header headerText="About Gatsby" />
          <Header headerText="It's pretty cool" />
          <p>Such wow. Very React.</p>
        </div>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicin elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicin elit."
        />
      </Container>
    </Layout>
  )
}

console.log(styles)
