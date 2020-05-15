import React, { Component } from 'react';
import Label from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import Swal from 'sweetalert2';

export class AnswerPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: true,
            pollCode: "",
            first: "",
            second: "",
            third: "",
            fourth: "",
            fifth: ""
        };

        this.showSwal = this.showSwal.bind(this);
        this.errorSwal = this.errorSwal.bind(this);
    }

    showSwal() {
        Swal.fire({
            text: "Gracias por contestar nuestra encuesta!",
            icon: 'success',
            showCancelButton: true,
            cancelButtonText: 'Volver a inicio',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ver resultados',
        })
        .then(confirm => {
            if (confirm) {
                window.location.href = '/pollDetails';
            }
        })
        .then(cancel => {
            if (cancel) {
                window.location.href = '/';
            }
        })
    }

    errorSwal() {
        Swal.fire({
            text: "Por favor contesta todas las preguntas",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        })
    }

    async postData(body) {
        await Axios(`http://localhost:8000/newAnswer`, {
                method: 'POST',
                data: body,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                if (res.status === 200) {
                    this.showSwal()
                }
            })
            .catch(this.errorSwal())
    }

    handleSubmit = e => {
        e.preventDefault();
        const body = this.state;

        this.postData(body);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        this.setState({
            pollCode: this.props.data.pollId
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <Label htmlFor='firstQuestion'>{ this.props.data.first }</Label>
                <br/>
                <div name='firstQuestion'>
                    <input type='radio' name='first' value='Si' onChange={this.handleChange}/> Si
                    <input type='radio' name='first' value='No' onChange={this.handleChange}/> No
                </div>
                {console.log(this.state)}
                <br/>
                <Label htmlFor='secondQuestion'>{ this.props.data.second }</Label>
                <br/>
                <div name='secondQuestion'>
                    <input type='radio' name='second' value='Accion' onChange={this.handleChange}/> Accion
                    <input type='radio' name='second' value='Deportes' onChange={this.handleChange}/> Deportes
                    <input type='radio' name='second' value='Estrategia' onChange={this.handleChange}/> Estrategia
                    <input type='radio' name='second' value='Otros' onChange={this.handleChange}/> Otros
                </div>
                <br/>
                <Label htmlFor='thirdQuestion'>{ this.props.data.third }</Label>
                <br/>
                <div name='thirdQuestion'>
                    <input type='radio' name='third' value='0-1' onChange={this.handleChange}/> 0-1 hora
                    <input type='radio' name='third' value='1-3' onChange={this.handleChange}/> 1-3 horas
                    <input type='radio' name='third' value='3-5' onChange={this.handleChange}/> 3-5 horas
                    <input type='radio' name='third' value='>5' onChange={this.handleChange}/> Mas de 5 horas
                </div>
                <br/>
                <Label htmlFor='fourthQuestion'>{ this.props.data.fourth }</Label>
                <br/>
                <div name='fourthQuestion'>
                    <input type='radio' name='fourth' value='Si' onChange={this.handleChange}/> Si
                    <input type='radio' name='fourth' value='No' onChange={this.handleChange}/> No
                </div>
                <br/>
                <Label htmlFor='fifthQuestion'>{ this.props.data.fifth }</Label>
                <br/>
                <div name='fifthQuestion'>
                    <input type='radio' name='fifth' value='0-50' onChange={this.handleChange}/> $0-50
                    <input type='radio' name='fifth' value='50-100' onChange={this.handleChange}/> $50-100
                    <input type='radio' name='fifth' value='100-1000' onChange={this.handleChange}/> $100-1000
                    <input type='radio' name='fifth' value='>1000' onChange={this.handleChange}/> Mas de $1000
                </div>
                <br/>
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    style = { styles.button }
                    >
                        Responder Encuesta
                </Button>
            </form>
        )
    }
}

const styles = {
    group: {
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 4,
        height: 50,
        margin: 30
    },
    a: {
        color: '#ffffff',
        textDecoration: "none"
    }
};

export default AnswerPoll
