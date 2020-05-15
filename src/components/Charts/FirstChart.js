import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export class FirstChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    height='250'
                    data={{
                        labels: ['Si', 'No'],
                        datasets: [{
                            barPercentage: 0.5,
                            label: ['Juegan videojuegos', 'No juegan videojuegos'],
                            data: [ this.props.first.Si, this.props.first.No],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            fontSize: 25,
                            text: 'Personas que juegan videjuegos'
                        },
                        legend: false,
                        maintainAspectRatio:false,
                        scales: {
                            yAxes:[{
                                stacked: true,
                                scaleLabel: {
                                    display: true,
                                    text: 'Numero de personas'
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
                        },
                        responsive: true
                    }}/>
            </div>
        )
    }
}
// xAxes: [{
//     gridLines: {
//         offsetGridLines: true
//     }
// }]

export default FirstChart
