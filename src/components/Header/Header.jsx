import React, { Component } from 'react';
import { connect } from "react-redux/src";

import { loadInstruments } from "../../reducers/fetchData/fetchDataActions";

class Header extends Component {

    constructor(props) {
        super(props)

        this.toggleSearch = this.toggleSearch.bind(this)

    }

    state = {
        toggleSearch: false
    }

    toggleSearch() {
        this.setState({
            toggleSearch: !this.state.toggleSearch
        })
    }

    componentDidMount() {

        this.props.dispatch(loadInstruments())
    }


    render() {
        return (
            <React.Fragment>

                <div className="top-header">
                    {/* schedule block */}
                    <div className="top-header__on-right">
                        <span className="top-header__elem">
                            с 10:00 до 20:00 (без выходных)
                        </span>
                        <span className="top-header__elem">
                            г.Минск, ул.Гамарника 20
                        </span>
                    </div>
                    {/* fast contacts block */}
                    <div>
                        <span className="top-header__elem">
                            МТС: +375 (29) 502-92-62
                        </span>
                        <span className="top-header__elem">
                            Life: +375 (29) 633-96-04
                        </span>
                    </div>
                    {/* top-header socials block */}
                    <div className="socials">
                        <span className="top-header__elem">
                            <a target="_blank" href="https://vk.com/monohansett">
                                <i className="fab fa-vk"></i>
                            </a>
                        </span>
                        <span className="top-header__elem">
                            <a target="_blank" href="https://www.facebook.com/kirill.naumenko.77">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </span>
                        <span className="top-header__elem">
                            <a target="_blank" href="https://plus.google.com/u/0/116280106244538094475">
                                <i className="fab fa-google-plus-square"></i>
                            </a>
                        </span>
                    </div>
                </div>
                {/* header block */}
                <div className="header">
                    <div>
                        <a className="logo" href="/">
                            <i className="fas fa-music fa-3x"></i>
                        </a>
                    </div>
                    {/* nav bar block */}
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">О нас</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Каталог</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Бренды</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Оплата и доставка</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Контакты</a>
                        </li>
                    </ul>
                    <form action="wantToFind" className={this.state.toggleSearch ? 'header__search search__fade-in' : 'header__search search__fade-out'} >
                        <input type="text" className="fullwidth js-search"  placeholder="Поиск..."/>
                    </form>
                    {/* header icons block */}
                    <div className="header-icons">
                        <span className="search__icon" onClick={this.toggleSearch}>
                            <i className="fas fa-search"></i>
                        </span>
                        <span className="log-in__icon">
                            <i className="fas fa-sign-in-alt"></i>
                        </span>
                        <span className="bucket__icon">
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <ul>
                        {this.props.instruments.map( (instrument, index) =>
                            <li key={index}>{instrument.name}</li>)}
                    </ul>
                </div>
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        instruments: state.instrumentReducer.instruments
    }
};


export default connect(mapStateToProps)(Header);;