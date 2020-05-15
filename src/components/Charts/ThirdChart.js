import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export class ThirdChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    height='250'
                    data={{
                        labels: ['0-1', '1-3', '3-5', 'Mas de 5'],
                        datasets: [{
                            barPercentage: 0.5,
                            data: [
                                this.props.third.uno,
                                this.props.third.dos,
                                this.props.third.tres,
                                this.props.third.cuatro
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
                            text: 'Promedio de horas que juegan'
                        },
                        legend: false,
                        maintainAspectRatio:false,
                        scales: {
                            yAxes: [{
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
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Horas'
                                },
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        responsive: true
                    }}/>
            </div>
        )
    }
}

export default ThirdChart
