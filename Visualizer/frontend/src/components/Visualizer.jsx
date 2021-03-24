import React, { useState } from 'react'
import { Grid, Button, Typography, TextField } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'

export default function Visualizer() {

    graphs = {
        BAR: "graphs.barGraph",
        LINED: "graphs.linedGraph",
        PIE: "graphs.pieGraph"
    }

    const [isVisualized, setVisualized] = useState(false)
    const [link, setLink] = useState('')
    const [graph, setGraph] = useState(graphs.BAR)

    const visualize = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch('/rest/visualize', requestOptions).then((_response) => {
            pass
        })
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
                        label="Link"
                        placeholder="Enter a Github Repo Link"
                        variant="outlined"
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

    const afterVisualized = () => {}

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
