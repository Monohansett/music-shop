import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import instrumentReducer from './reducers/fetchData/fetchDataReducer';

class App extends Component {

    // state = {
    //     data: null
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3012/instruments')
    //         .then(res => console.log(res.json()) )
    //         .then(data => this.setState({
    //             data: { data }
    //         })).catch(
    //             console.log(this.state.data)
    //         )
    // }

    render() {
        return (
            <Router>
                <React.Fragment>

                    <Header></Header>
                    <div>
                        <ul>
                            {/* {this.state.data.map((inst, index) =>
                                <li key={index}>{inst.name}</li>
                            )} */}
                        </ul>

                    </div>
                    <Switch>

                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;
