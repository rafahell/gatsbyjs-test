import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"


export default () => (
    <Container>
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="This is a Header Folks" />
            <h1>About Gatsby</h1>
            <p>Such wow. Very React.</p>
        </div>
    </Container>
)