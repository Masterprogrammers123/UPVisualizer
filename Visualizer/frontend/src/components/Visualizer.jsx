import React, { useState } from 'react'
import { Grid, Button, Typography, TextField } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'

export default function Visualizer() {
    const graphs = {
        BAR: 'graphs.barGraph',
        LINED: 'graphs.linedGraph',
        PIE: 'graphs.pieGraph',
    }

    const [isVisualized, setVisualized] = useState(false)
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [graph, setGraph] = useState(graphs.BAR)

    const visualize = () => {
        console.log(`Owner: ${owner}\nName: ${name}`)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                repoOwner: owner,
                repoName: name,
            }),
        }
        fetch('/rest/visualize', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    const handleNameFieldChange = (e) => {
        setName(e.target.value)
    }

    const handleOwnerFieldChange = (e) => {
        setOwner(e.target.value)
    }

    const beforeVisualized = () => {
        return (
            <>
                {/* Because in React JSX everything needs to be in one container */}
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3">
                        Visualizer
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Owner"
                        color="primary"
                        placeholder="Enter a Github Repo Owner"
                        variant="outlined"
                        onChange={handleOwnerFieldChange}
                    />
                    <TextField
                        color="secondary"
                        label="Name"
                        placeholder="Enter a Github Repo Name"
                        variant="outlined"
                        onChange={handleNameFieldChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={visualize}
                    >
                        Visualize
                    </Button>
                </Grid>
            </>
        )
    }

    const afterVisualized = () => {} // TODO

    return (
        <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">UPVisualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Visualize">Visualize</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {isVisualized === false ? beforeVisualized() : afterVisualized()}
        </Grid>
    )
}
