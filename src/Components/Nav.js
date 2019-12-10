import React, {Component} from 'react';


class Nav extends Component {
    render() {
        return <div className='header'>
            <div className="container">
                <div className="header--top">
                    <div className="header--top__logo"></div>
                    <div className="header--top__contact">
                        <i class="fas fa-mobile-alt"><span className="fontawsome--text">800 934 831</span></i>
                        <i class="fas fa-at"><span className="fontawsome--text">biuro@dktronik.pl</span></i>
                    </div>
                </div>
            </div>
            <header>
                <div className="container">
                    <div className='nav--example'>
                        <div><span className="company--name">DK TRONIK</span></div>
                   <NavExample />
                    </div>
                </div>
            </header>
        </div>


    }
}


class NavExample extends Component {
    render() {
        return <div className="ph-line-nav nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <div className="effect"></div>
        </div>
    }
}

export default Nav