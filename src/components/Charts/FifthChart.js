import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export class FifthChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    height='250'
                    data={{
                        labels: ['0-50', '51-100', '101-100', 'Mas de 1000'],
                        datasets: [{
                            barPercentage: 0.5,
                            data: [
                                this.props.fifth.uno,
                                this.props.fifth.dos,
                                this.props.fifth.tres,
                                this.props.fifth.cuatro
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
                            text: 'Promedio de dinero gastado en juegos'
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
                                stacked: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Cantidad en dolares'
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

export default FifthChart
