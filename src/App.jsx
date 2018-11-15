import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'

class App extends Component {

    render() {
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
