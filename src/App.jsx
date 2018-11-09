import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'

class App extends Component {

    constructor(props) {
        super(props)

        this.loadData = this.loadData.bind(this)
    }

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

    loadData() {
        axios.get(`http://localhost:3012/instruments`)
            .then(res => {
                const instruments = res.data;
                this.setState({
                    instruments: instruments
                })
            })
    }

    render() {
        const a = this.state.instruments[0] || { name: "default" }

        return (
            <Router>
                <React.Fragment>

                    <Header></Header>
                    <Switch>

                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;
