import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../App.css';

export class pollLists extends Component {
    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const poll = this.props.data.poll.map(poll => (
            <ListItem
                onChange={this.handleChange}
                button
                key={ poll._id }
                onClick={ () => {
                    this.props.data.changeState(
                        poll._id,
                        poll.pollName,
                        poll.first,
                        poll.second,
                        poll.third,
                        poll.fourth,
                        poll.fifth
                    )
                }}>
                    { poll.pollName }
            </ListItem>
        ));

        return(
            <React.Fragment>
                <List>
                    { poll }
                </List>
            </React.Fragment>
        )
    }
}

export default pollLists