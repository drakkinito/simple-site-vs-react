import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

const LinkButton = (props) => {
    const { path, lable, classes } = props
    return (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" className={classes.button}>
                <span>{lable}</span>
            </Button>
        </Link>
    )
}

export default withStyles(styles)(LinkButton)