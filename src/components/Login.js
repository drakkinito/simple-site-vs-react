import React from 'react'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import { login } from '../actions/actionSession'
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    button: {
        margin: '10px 0 0 120px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirectToPreviousRoute: false
        }
    }
    handleChange = (ev) => {
        const { value, name } = ev.target
        this.setState({ [name]: value })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.login(this.state, () => this.setState({ redirectToPreviousRoute: true }))
    }
    handleEnter = (ev) => {
        if (ev.key === 'Enter') {
            this.handleSubmit(ev)
        }
    }
    render() {
        const { username, password, redirectToPreviousRoute } = this.state
        const { classes, errorMsg, location } = this.props
        const { from } = location.state || { from: { pathname: '/' } }
        console.log('loc', location.state);
        if (redirectToPreviousRoute) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <span style={{ color: 'red', marginLeft: 10 }}>{errorMsg && errorMsg}</span>
                <form onSubmit={this.handleSubmit} style={{ width: 200 }} onKeyPress={this.handleEnter}>
                    <TextField
                        ref={this.textInput}
                        className={classes.textField}
                        id="standard-name"
                        margin="normal"
                        label="Name"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <TextField
                        ref={(ref) => this.passwordInput = ref}
                        name="password"
                        type="password"
                        label="Password"
                        margin="normal"
                        autoComplete="current-password"
                        id="standard-password-input"
                        value={password}
                        onChange={this.handleChange}
                        className={classes.textField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}>Login</Button>
                </form>
            </div>
        )
    }
}
export default connect(state => ({
    errorMsg: state.session.errorMsg
}), { login })(withStyles(styles)(Login))