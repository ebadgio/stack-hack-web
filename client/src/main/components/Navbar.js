import React from 'react';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state ={
            show: false,
            scrollPos: 0,
            scrolled: false,
            open: true,
            listen: true,
            hasResized: false,
            size: window.innerWidth
        };
    }

    componentDidMount() {
        setInterval(() => {
            if (window.innerWidth > 750) {
                document.getElementById('nav-item-wrapper').style.display = 'inherit';
                document.getElementById('menu-btn').style.display = 'none';
                document.getElementById("menu").style.width = "0";
                this.setState({open: true});
            } else {
                document.getElementById('nav-item-wrapper').style.display = 'none';
                document.getElementById('menu-btn').style.display = 'flex';
            }
        }, 50);

        const elem = document.getElementById('nav');

        document.addEventListener('scroll', () => {
            if (this.state.listen) {
                if (window.scrollY > this.state.scrollPos) {
                    this.setState({show: false, scrollPos: window.scrollY});
                    elem.style.background = 'none';
                    elem.style.color = '#fff';
                    elem.style.boxShadow = 'none';
                    document.getElementById("menu").style.width = "0";

                } else {
                    if (!this.state.scrolled) {
                        this.setState({show: true, scrollPos: window.scrollY});
                        if (window.scrollY === 0) {
                            elem.style.background = 'none';
                            elem.style.color = '#fff';
                            elem.style.boxShadow = 'none';
                            document.getElementById("menu").style.width = "0";
                        } else {
                            elem.style.background = '#fff';
                            elem.style.color = '#424242';
                            elem.style.boxShadow = '0 1px 7px rgba(0,0,0,.2)';
                        }
                    } else {
                        this.setState({scrolled: false});
                    }

                }
            }
        });
    }


    scroll(id) {
        document.getElementById(id).scrollIntoView();
        document.getElementById("menu").style.width = "0";
        this.setState({show: false, scrolled: true, open: true, listen: true});
    }

    toggleMenu() {
        if (this.state.open) {
            document.getElementById("menu").style.width = "200px";
            this.setState({open: false});
        } else {
            document.getElementById("menu").style.width = "0";
            this.setState({open: true});
        }
    }

    render() {
        return(
            <div className="navbar" id="nav" style={this.state.show ? {position: 'fixed'} : {position: 'absolute'}}>
                <div className="basic-row" id="nav-wrap">
                    <img className="nav-logo"
                         src="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg" />
                    <span className="nav-title">Stack Hack Tutoring</span>
                </div>
                <div id="menu-btn" onClick={() => this.toggleMenu()}>
                    <i className="fas fa-bars" id="menu-icon" />
                </div>
                <div className="basic-row" id="nav-item-wrapper" style={{marginRight: '20px'}}>
                    <div className="nav-item nav-item-block" onClick={() => this.scroll('overview')}>
                        OVERVIEW
                    </div>
                    <div className="nav-item nav-item-block" onClick={() => this.scroll('syllabus')}>
                        SYLLABUS
                    </div>
                    <div className="nav-item nav-item-block" onClick={() => this.scroll('pricing')}>
                        PRICING
                    </div>
                    <div className="nav-item nav-item-block" onClick={() => this.scroll('team')}>
                        TEAM
                    </div>
                    <div className="nav-item nav-item-block" onClick={() => this.scroll('contact')}>
                        CONTACT
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
                    <div className="nav-item side"  onClick={() => this.scroll('team')}>
                        TEAM
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