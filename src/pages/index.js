import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import "../styles/global.css"

export default () => <div style={{ color: `purple` }}>
    <Container>
        <ul>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/contact"> Contact</Link></li>
            <li><Link to="/about-users"> Users</Link></li>
        </ul>


        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Container>

</div>
