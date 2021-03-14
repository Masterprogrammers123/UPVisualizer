import React from 'react'
import { Grid, Button, Typography, Link } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'

export default function HomePage() {
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
                <Navbar.Brand href="#home">UPVisualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Visualize">Visualize</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid item xs={12}>
                <Typography variant="h3" component="h3">
                    <Link href="/About">UPV</Link> is a github project
                    visualizer
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="/Visualize">
                    <Button color="secondary" variant="contained">
                        Start now!
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
