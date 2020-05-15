import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export class SecondChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    height='250'
                    data={{
                        labels: ['Accion', 'Deportes', 'Estrategia', 'Otros'],
                        datasets: [{
                            barPercentage: 0.5,
                            data:
                            [
                                this.props.second.Accion,
                                this.props.second.Deportes,
                                this.props.second.Estrategia,
                                this.props.second.Otros
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(72, 201, 176, 0.2)',
                                'rgba(230, 126, 34, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(72, 201, 176, 1)',
                                'rgba(230, 126, 34, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            fontSize: 25,
                            text: 'Tipos de juegos que prefieren las personas'
                        },
                        legend: false,
                        maintainAspectRatio:false,
                        scales: {
                            yAxes:[{
                                stacked: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Numero de personas'
                                },
                                ticks: {
                                    beginAtZero: true,
                                    callback: function(value) {if (value % 1 === 0) {return value;}}
                                  }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Tipos de juegos'
                                }
                            }]
                        },
                        responsive: true
                    }}/>
            </div>
        )
    }
}

export default SecondChart
