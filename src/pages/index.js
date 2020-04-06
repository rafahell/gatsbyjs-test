import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import "../styles/global.css"
//import axios from 'axios'

class ClientFetchingExample extends Component {
    state = {
        loading: false,
        error: false,
        pupper: {
            img: "",
            breed: "",
        },
    }

    componentDidMount() {
        this.fetchRicksPupper()
    }
}


const { img, breed } = this.state.pupper

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


    {this.state.loading ? (
        <p>Please hold, pupper incoming!</p>
    ) : img && breed ? (
        <>
            <h2>{`${breed} pupper!`}</h2>
            <img src={img} alt={`cute random `} style={{ maxWidth: 300 }} />
        </>
    ) : (
                <p>Oh noes, error fetching pupper :(</p>
            )}
</div>




