import React from 'react'
import { Redirect } from 'react-router-dom';

import { Loader } from './ui/Loader'
import { ErrorMsg } from './ui/ErrorMsg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import { testPassword, testEmail } from '../helpers/testPassword'

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
            email: 'max@test.com',
            password: '12345',
            redirectToPreviousRoute: false
        }
    }
    handleChange = (ev) => {
        const { value, name } = ev.target
        this.setState({ [name]: value })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        const { email, password } = this.state
        this.props.login({ email, password }, () => this.setState({ redirectToPreviousRoute: true }))
        this.setState({ password: '' })
    }
    handleEnter = (ev) => {
        if (ev.key === 'Enter') {
            this.handleSubmit(ev)
        }
    }

    validate = () => {
        const { email, password } = this.state
        if (!testPassword(password)) {
            return false
        }
        if (!testEmail(email)) {
            return false
        }
        return true
    }

    render() {
        const { email, password, redirectToPreviousRoute } = this.state
        const { classes, errorMsg, location, isLoading } = this.props
        const { from } = location.state || { from: { pathname: '/' } }
        if (redirectToPreviousRoute) {
            return <Redirect to={from} />
        }
        return (
            <div>
                {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
                {isLoading && <Loader />}
                <form onSubmit={this.handleSubmit} style={{ width: 200 }} onKeyPress={this.handleEnter}>
                    <TextField
                        ref={this.textInput}
                        className={classes.textField}
                        id="standard-name"
                        margin="normal"
                        label="Email"
                        type="text"
                        name="email"
                        value={email}
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
                        disabled={!this.validate()}
                        className={classes.button}>Login</Button>
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(Login)