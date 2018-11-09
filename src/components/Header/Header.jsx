import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container top-header">
                    <div className="top-header__on-right">
                        <span className="top-header__elem">
                            с 10:00 до 20:00 (без выходных)
                        </span>
                        <span className="top-header__elem">
                            г.Минск, ул.Гамарника 20
                        </span>
                    </div>
                    <div>
                        <span className="top-header__elem">
                            МТС: +375 (29) 502-92-62
                        </span>
                        <span className="top-header__elem">
                            Life: +375 (29) 633-96-04
                        </span>
                    </div>
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
                <div className="container header">
                    <div>
                        <a className="logo" href="/">
                            <i className="fas fa-music fa-3x"></i>
                        </a>
                    </div>
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
                </div>
            </React.Fragment >
        )
    }
}

export default Header;