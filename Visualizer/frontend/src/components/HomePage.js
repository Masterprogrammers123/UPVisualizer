import React from 'react'
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'

export default function HomePage() {
    return (
        <Grid container spacing={1} align="center" >
            <Typography variant="h4" component="h4">HomePage</Typography>
        </Grid>
    )
}