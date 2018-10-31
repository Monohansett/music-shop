import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    state = {
        counter: 0,
        instruments: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3012/instruments`)
            .then(res => {
                const instruments = res.data;
                this.setState({
                    instruments: instruments
                })
            })

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.instruments.map( instr => <li>{instr.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default App;
