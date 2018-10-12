import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/actionSession';

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

class LoginButton extends React.Component {
    handleClick = () => {
        if (this.props.id) {
            this.props.logout();
        } else {
            this.setRedirect();
        }
    }
    render() {
        const { classes } = this.props
        return (
            <span>
                {this.props.id ?
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
                        {/* <Link to='/' style={{ textDecoration: 'none', color: '#FFF' }}> */}
                            <span>Вийти</span>
                        {/* </Link> */}
                    </Button>
                     :
                    <Button variant="contained" color="primary" className={classes.button}>
                        {/* <Link to='/login' style={{ textDecoration: 'none', color: '#FFF' }}> */}
                            <span>Увійти</span>
                         {/* </Link> */}

                    </Button>
                }
            </span>
        )
    }
}

export default connect(state => ({
    id: state.session.user.id
}), { logout })(withStyles(styles)(LoginButton))

