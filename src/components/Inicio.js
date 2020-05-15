import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class Inicio extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Responde nuestra encuesta!</h1>
                </div>
                <br/>
                {/* <Button
                    color="secondary"
                    variant="contained"
                    style = { styles.button }
                >
                    <a href='/login' style={ styles.a }>
                        Iniciar Sesion
                    </a>
                </Button> */}
                <Button
                    color="secondary"
                    variant="contained"
                    style = { styles.button }
                >
                    <a href='/encuestas' style={ styles.a }>
                        Responder Encuesta
                    </a>
                </Button>
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
    }
}

export default Inicio
