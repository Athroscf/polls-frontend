import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const body = this.state;

        Axios(`http://localhost:8000/login`, {
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            console.log('status', res.status);
        })
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <div>
                    <h1>Iniciar sesion</h1>
                </div>
                <form onSubmit={ this.handleSubmit }>
                    <Input
                        className='text'
                        placeholder='Ingresa tu correo electronico'
                        type='email'
                        margin='normal'
                        name='email'
                        noValidate
                        value={ email }
                        onChange={ this.handleChange }/>
                    <br/>
                    <Input
                        className='text'
                        placeholder='Ingresa tu contraseña'
                        type='password'
                        margin='normal'
                        name='password'
                        noValidate
                        value={ password }
                        onChange={ this.handleChange }/>
                    <br/><br/>
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        style = { styles.button }
                    >Iniciar Sesion</Button>
                    <Button
                            color="secondary"
                            variant="contained"
                            style = { styles.button }
                    >
                        <a href='/pollDetails' style = { styles.a }>
                        Volver al inicio
                        </a>
                    </Button>
                    <br/>
                    <Link
                        cursor="pointer"
                        to="/registro"
                        style = { styles.link }
                    >No tienes una cuenta? Registrate aqui.</Link>
                </form>
            </div>
        );
    }
}

const styles = {
    button: {
        borderRadius: 4,
        height: 50,
        margin: 30
    },
    a: {
        color: '#ffffff',
        textDecoration: "none"
    },
    link: {
        color: '#000000',
        textDecoration: "none",
        '&:hover':{
            textDecoration: 'underline',
        }
    }
}

export default Login
