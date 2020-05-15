import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export class FourthChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    height='250'
                    data={{
                        labels: ['Si', 'No'],
                        datasets: [{
                            barPercentage: 0.5,
                            data: [
                                this.props.fourth.Si,
                                this.props.fourth.No
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            fontSize: 25,
                            text: 'Personas que gastaron dinero en videojuegos'
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
                                gridLines: {
                                    display: false
                                }
                            }]
                        }
                    }}/>
            </div>
        )
    }
}

export default FourthChart
