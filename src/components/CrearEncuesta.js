import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Label from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Axios from 'axios';
import '../App.css';

export class CrearEncuesta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollName: '',
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const body = this.state;
        console.log(body);

        Axios(`https://pollsrender.herokuapp.com//newPoll`, {
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { pollName, first, second, third, fourth, fifth } = this.state;

        return (
            <div className='container'>
                <div>
                    <h1>Crea una encuesta</h1>
                </div>
                <div className='align'>
                    <form onSubmit={ this.handleSubmit } className='form'>
                        <Label htmlFor='pollName' className='label'>Nombre de la encuesta</Label>
                        <Input
                            placeholder='Ingresa el nombre de tu encuesta'
                            name='pollName'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ pollName }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Label htmlFor='first' className='label'>Primera pregunta</Label>
                        <Input
                            placeholder='Ingresa la primer pregunta de la encuesta'
                            name='first'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ first }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Label htmlFor='second' className='label'>Segunda pregunta</Label>
                        <Input
                            placeholder='Ingresa la segunda pregunta de la encuesta'
                            name='second'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ second }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Label htmlFor='third' className='label'>Tercera pregunta</Label>
                        <Input
                            placeholder='Ingresa la tercera pregunta de la encuesta'
                            name='third'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ third }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Label htmlFor='fourth' className='label'>Cuarta pregunta</Label>
                        <Input
                            placeholder='Ingresa la cuarta pregunta de la encuesta'
                            name='fourth'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ fourth }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Label htmlFor='fifth' className='label'>Quinta pregunta</Label>
                        <Input
                            placeholder='Ingresa la quinta pregunta de la encuesta'
                            name='fifth'
                            margin='normal'
                            className='textPoll'
                            noValidate
                            value={ fifth }
                            onChange={ this.handleChange }/>
                        <br/>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            style = { styles.button }>
                                Crear Encuesta
                        </Button>
                        <Button
                            className="position"
                            color="secondary"
                            variant="contained"
                            style = { styles.button }>
                                <a href='/' style = { styles.a }>
                                Volver al inicio
                                </a>
                        </Button>
                    </form>
                </div>
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
    },
}

export default CrearEncuesta
