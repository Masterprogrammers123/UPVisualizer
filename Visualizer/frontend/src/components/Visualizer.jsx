import React, { useState } from 'react'
import { Grid, Button, Typography, Link, TextField } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'

export default function Visualizer() {
    const [isVisualized, setVisualized] = useState(false)
    const [link, setLink] = useState('')

    const handleTextFieldChange = (e) => {
        setLink(e)
    }

    const beforeVisualized = () => {
        <Grid item xs={12}>
            <TextField
            label="Outlined"
            placeholder="Enter a Github Repo Link"
            variant="outlined"
            onChange={handleTextFieldChange}
            />
            test
        </Grid>
    }

    const visualize = () => {}

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
            {beforeVisualized()}
        </Grid>
    )
}