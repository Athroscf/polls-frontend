import React, { Component } from 'react';
import PollList from './PollList';
import AnswerPoll from './AnswerPoll';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import './../App.css';

export class Polls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: [],
            pollId: '',
            pollName: '',
            firstQ: '',
            secondQ: '',
            thirdQ: '',
            fourthQ: '',
            fifthQ: '',
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            questionsVisible: false,
            confirmation: false,
        }
    }

    componentDidMount() {
        Axios
            .get(`http://localhost:8000/listPolls`)
            .then(res => {
                this.setState({
                    polls: res.data.result
                });
            });
    }

    changeState(pollId, pollName, first, second, third, fourth, fifth) {
        this.setState({
            pollIdQ: pollId,
            pollNameQ: pollName,
            firstQ: first,
            secondQ: second,
            thirdQ: third,
            fourthQ: fourth,
            fifthQ: fifth,
            questionsVisible: true
        })
    }

    confirmation() {
        this.setState({
            questionsVisible: false,
            confirmation: true
        })
    }

    render() {
        return (
            <div className='pollGrid'>
                <div className='polls-container'>
                    <h1>Lista de encuestas</h1>
                    <div className="list-container">
                        <PollList
                            data = {{
                                poll: this.state.polls,
                                changeState: this.changeState.bind(this)
                            }}/>
                    </div>
                    <Button
                        color="secondary"
                        variant="contained"
                        style = { styles.button }
                    >
                        <a href='/' style={ styles.a }>
                            Volver
                        </a>
                    </Button>
                </div>
                <div className='answer-container'>
                    { this.state.questionsVisible ?
                        <div>
                            <h1>{ this.state.pollName }</h1>
                            <AnswerPoll
                                data = {{
                                    confirmation: this.confirmation.bind(this),
                                    pollId: this.state.pollIdQ,
                                    first: this.state.firstQ,
                                    second: this.state.secondQ,
                                    third: this.state.thirdQ,
                                    fourth: this.state.fourthQ,
                                    fifth: this.state.fifthQ
                                }}
                            />
                        </div> : null
                    }
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
    }
};

export default Polls
