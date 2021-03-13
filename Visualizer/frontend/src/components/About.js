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
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

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
    FRAMEWORKS: 'pages.frameworks',
    DEVS: 'pages.devs',
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
                            Nested List Items
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon /> {/*TODO: Change to Django Icon*/}
                        </ListItemIcon>
                        <ListItemText primary="Django" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />{' '}
                                    {/* TODO: Change to python logo*/}
                                </ListItemIcon>
                                <ListItemText primary="Python" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon /> {/* TODO: Change to React logo*/}
                        </ListItemIcon>
                        <ListItemText primary="React" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                    {/* TODO: Change to Webpack logo*/}
                                </ListItemIcon>
                                <ListItemText primary="Webpack" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
        )
    }

    const devsPageInfo = () => {}

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
                <Typography variant="h1" component="h1">
                    About
                </Typography>
            </Grid>
            {frameworksPageInfo()}
            {/* TODO: Implement the state and others */}
        </Grid>
    )
}
