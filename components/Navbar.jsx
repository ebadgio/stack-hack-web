import React from 'react';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollPos: 0,
            scrolled: false,
            open: true,
            hasResized: false,
        };
    }

    componentDidMount() {

        const close = () => {

            document.getElementById("menu").style.width = "0";
            document.getElementById('main-wrapper').removeEventListener('click', close);
        };

        const open = () => {

            document.getElementById("menu").style.width = "200px";
            setTimeout(() => {
                if (document.getElementById("menu").style.width === '200px') {
                    document.getElementById('main-wrapper').addEventListener('click', close);
                }
            }, 100);

        };

        document.getElementById('menu-btn').addEventListener('click', open);

        setInterval(() => {
            if (window && window.innerWidth > 750) {
                document.getElementById('nav-item-wrapper').style.display = 'inherit';
                document.getElementById('menu-btn').style.display = 'none';
                close();
                this.setState({open: true});
            } else {
                document.getElementById('nav-item-wrapper').style.display = 'none';
                document.getElementById('menu-btn').style.display = 'flex';
            }
        }, 50);

        document.addEventListener('scroll', () => {
            if (window && window.scrollY === 0) {
                this.base()
            } else {
                if (this.state.scrolled) {
                    this.base();
                    this.setState({scrolled: false});
                } else {
                    this.lift();
                }
            }
        });
    }

    base() {
        const elem = document.getElementById('nav');
        elem.style.background = '#424242';
        elem.style.color = '#fff';
        elem.style.boxShadow = 'none';
        elem.style.position = 'absolute';
        document.getElementById("menu").style.width = "0";
        document.getElementById('menu-btn').style.border = '1px solid';
    };

    lift() {
        const elem = document.getElementById('nav');
        elem.style.background = '#fff';
        elem.style.color = '#424242';
        elem.style.boxShadow = '0 1px 7px rgba(0,0,0,.05)';
        elem.style.position = 'fixed';
        document.getElementById('menu-btn').style.border = 'none';
    }


    scroll(id) {
        document.getElementById(id).scrollIntoView();
        document.getElementById("menu").style.width = "0";
        this.base();
        this.setState({open: true, scrolled: true});
    }

    render() {
        return(
            <div className="navbar" id="nav">
                <div className="navbar-inner contain">
                    <div className="basic-row" id="nav-wrap">
                        <img className="nav-logo"
                             src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg" />
                        <span className="nav-title">Stack Hack Tutoring</span>
                    </div>
                    <div id="menu-btn">
                        <i className="fas fa-bars" id="menu-icon" />
                    </div>
                    <div className="basic-row" id="nav-item-wrapper" style={{marginRight: '20px'}}>
                        <div className="nav-item-block box nav-item" onClick={() => this.scroll('overview')}>
                            OVERVIEW
                        </div>
                        <div className="nav-item box nav-item-block" onClick={() => this.scroll('syllabus')}>
                            SYLLABUS
                        </div>
                        <div className="nav-item box nav-item-block" onClick={() => this.scroll('pricing')}>
                            PRICING
                        </div>
                        <div className="nav-item box nav-item-block" onClick={() => this.scroll('contact')}>
                            CONTACT
                        </div>
                    </div>
                </div>
                <div className="sidenav flex-col" id="menu">
                    <img className="nav-logo"
                         src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg"
                         style={{marginBottom: '40px', marginRight: 'auto'}} />
                    <div className="nav-item side" onClick={() => this.scroll('overview')}>
                        OVERVIEW
                    </div>
                    <div className="nav-item side" onClick={() => this.scroll('syllabus')}>
                        SYLLABUS
                    </div>
                    <div className="nav-item side" onClick={() => this.scroll('pricing')}>
                        PRICING
                    </div>
                    <div className="nav-item side"  onClick={() => this.scroll('contact')}>
                        CONTACT
                    </div>
                </div>
            </div>
        );
    }

}

export default Navbar;