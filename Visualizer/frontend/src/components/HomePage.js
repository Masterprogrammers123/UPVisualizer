import React from 'react'
import { Grid, Button, Typography, Link } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as link,
} from 'react-router-dom'

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
