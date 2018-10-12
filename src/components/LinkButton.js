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
    const { path, lable, classes, } = props
    return (
        <Button variant="contained" color="primary" className={classes.button}>
            <Link to={path} style={{ textDecoration: 'none', color: '#FFF' }}>
                <span>{lable}</span>
            </Link>

        </Button>
    )
}

export default withStyles(styles)(LinkButton)