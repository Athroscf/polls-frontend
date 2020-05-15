import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import FirstChart from './Charts/FirstChart';
import SecondChart from './Charts/SecondChart';
import ThirdChart from './Charts/ThirdChart';
import FourthChart from './Charts/FourthChart';
import FifthChart from './Charts/FifthChart';
import './../App.css';

export class PollDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: {
                Si: null,
                No: null
            },
            second: {
                Accion: null,
                Deportes: null,
                Estrategia: null,
                Otros: null
            },
            third: {
                uno: null,
                dos: null,
                tres: null,
                cuatro: null
            },
            fourth: {
                Si: null,
                No: null
            },
            fifth: {
                uno: null,
                dos: null,
                tres: null,
                cuatro: null
            }
        }
    }

    async componentDidMount() {
        await Axios
            .get(`http://localhost:8000/answerStatistics`)
            .then(res => {
                this.setState({
                    first: {
                        Si: res.data.first.Si,
                        No: res.data.first.No
                    },
                    second: {
                        Accion: res.data.second.Accion,
                        Deportes: res.data.second.Deportes,
                        Estrategia: res.data.second.Estrategia,
                        Otros: res.data.second.Otros
                    },
                    third: {
                        uno: res.data.third.uno,
                        dos: res.data.third.dos,
                        tres: res.data.third.tres,
                        cuatro: res.data.third.cuatro
                    },
                    fourth: {
                        Si: res.data.fourth.Si,
                        No: res.data.fourth.No
                    },
                    fifth: {
                        uno: res.data.fifth.uno,
                        dos: res.data.fifth.dos,
                        tres: res.data.fifth.tres,
                        cuatro: res.data.fifth.cuatro
                    }
                })
            })
    }

    render() {
        const { first, second, third, fourth, fifth } = this.state;

        return (
            <div>
                <h1>Resultados de la encuesta</h1>
                <div className='chart-container'>
                    <FirstChart
                        first={first}
                        className='charts'/>
                    <SecondChart
                        second={second}
                        className='charts'/>
                    <ThirdChart
                        third={third}
                        className='charts'/>
                    <FourthChart
                        fourth={fourth}
                        className='charts'/>
                    <FifthChart
                        fifth={fifth}
                        className='charts'/>
                </div>
                <Button
                    color="secondary"
                    variant="contained"
                    style = { styles.button }
                >
                    <a href='/' style={ styles.a }>
                        Ir al inicio
                    </a>
                </Button>
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

export default PollDetails