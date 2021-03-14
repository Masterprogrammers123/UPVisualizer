import React, { useState } from 'react'
import { Grid, Button, Typography, IconButton } from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Navbar, Nav } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const pages = {
    PROJECT: 'pages.project',
    FRAMEWORKS: 'pages.frameworks'
}

export default function About() {
    const [page, setPage] = useState(pages.PROJECT)
    const [open, setOpen] = React.useState(true)
    const classes = useStyles()

    const handleClick = () => {
        setOpen(!open)
    }

    const projectPageInfo = () => {
        return (
            <Grid item xs={6}>
                <Typography
                    style={{ textAlign: 'center' }}
                    component="h3"
                    variant="h3"
                >
                    Project
                </Typography>
                <Typography
                    style={{ textAlign: 'center' }}
                    component="p"
                    variant="p"
                >
                    <b>U</b>ltimate
                    <br />
                    <b>P</b>rogress
                    <br />
                    <b>V</b>isualizer
                    <br />
                    or UPV for short is an entry for Tech With Tim's hackathon,
                    or "Thimathon". It lets you visualize you and other
                    collaborator's progress in a github progress in terms of
                    commits and prs. Using a bar, pie or lined graph, you will
                    easily be abe to deduce who is gives in the most work and
                    who gives the less.
                </Typography>
            </Grid>
        )
    }

    const frameworksPageInfo = () => {
        return (
            <Grid item xs={6}>
                <Typography
                    variant="h3"
                    component="h3"
                    style={{ textAlign: 'center' }}
                >
                    Frameworks
                </Typography>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                        >
                            Frameworks used
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <img
                                width="75"
                                height="50"
                                src="https://i.imgur.com/V5cY8XU.png"
                            />
                        </ListItemIcon>
                        <ListItemText primary="Django" />
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-512/react-native-555397.png"
                                witdh="50"
                                height="50"
                            />
                        </ListItemIcon>
                        <ListItemText primary="React" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <img
                                        src="https://i.imgur.com/4FVpvz8.png"
                                        height="50"
                                        width="50"
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Webpack" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <img
                                        src="https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png"
                                        height="50"
                                        width="50"
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Babel" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
        )
    }

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
            <Grid item xs={12}>
                <Typography variant="h1" component="h1">
                    About
                </Typography>
            </Grid>
            {page === pages.PROJECT ? projectPageInfo() : frameworksPageInfo()}
            <Grid item xs={12}>
                <IconButton
                    onClick={() => {
                        page === pages.PROJECT
                            ? setPage(pages.FRAMEWORKS)
                            : setPage(pages.PROJECT)
                    }}
                >
                    {page === pages.FRAMEWORKS ? (
                        <NavigateBeforeIcon />
                    ) : (
                        <NavigateNextIcon />
                    )}
                </IconButton>
            </Grid>
        </Grid>
    )
}
