import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Axios from 'axios';
import Swal from 'sweetalert2';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            email: '',
            username: '',
            password: ''
        }
    }

    async getResponse() {
        const body = this.state;

        await Axios(`https://pollsrender.herokuapp.com/newUser`, {
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log('success', res);
                Swal.fire({
                    show: this.state.show,
                    text: res.data.mensaje,
                    icon: 'success',
                    type: "success",
                    onConfirm: (function() {
                        window.location.href = '/pollDetails'
                    })
                })
            }
        })
        .catch(function(res) {
            if (res.status === 400) {
                Swal.fire({
                    title: "Error",
                    text: res.data.error,
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                })
            }
        })
        .catch(res => {
            if (res.status === 204) {
                Swal.fire({
                    title: "Error",
                    text: res.data.error,
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.getResponse();
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, username, password } = this.state;

        return (
            <div>
                <div>
                    <h1>Registrate</h1>
                </div>
                    <form onSubmit={ this.handleSubmit }>
                        <Input
                            className='text'
                            placeholder='Correo electronico'
                            type='email'
                            margin='normal'
                            name='email'
                            value={ email }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Input
                            className='text'
                            placeholder='Nombre de usuario'
                            type='text'
                            margin='normal'
                            name='username'
                            value={ username }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Input
                            className='text'
                            placeholder='Contraseña'
                            type='password'
                            margin='normal'
                            name='password'
                            value={ password }
                            onChange={ this.handleChange }/>
                        <br/><br/>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            style = { styles.button }
                        >Registrar</Button>
                        <Button
                                color="secondary"
                                variant="contained"
                                style = { styles.button }
                        >
                            <a href='/' style = { styles.a }>
                            Volver al inicio
                            </a>
                        </Button>
                        <br/>
                        <Link
                            to='/login'
                            style = { styles.a }
                        >Ya tienes una cuenta? Inicia Sesion aqui.</Link>
                    </form>
            </div>
        )
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
    }
}

export default Register
