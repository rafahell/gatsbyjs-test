import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

export default () => (
    <Container>
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    </Container>
)