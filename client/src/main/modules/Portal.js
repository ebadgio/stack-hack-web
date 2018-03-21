import React from 'react';

class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: false});
            setTimeout(() => {
                this.props.endFunc();
            }, 1000);
        }, this.props.time);
    }

    render() {
        if (this.props.success) {

            return(
                <div className="portal flex-col shadow-heavy success" style={this.state.show ? {opacity: 1} : {}}>
                    <div className="row" style={{justifyContent: 'center'}}>
                        <span style={{fontSize: '28px', textAlign: 'center'}}><strong>Success!</strong></span>
                    </div>
                    <div className="heading-description">
                        Your information has been received. We will reach out to you soon!
                    </div>
                </div>
            );
        } else if (this.props.failure) {
            return(
                <div className="portal flex-col shadow-heavy failure" style={this.state.show ? {opacity: 1} : {}}>
                    <div className="row" style={{justifyContent: 'center'}}>
                        <span style={{fontSize: '28px', textAlign: 'center'}}><strong>Something went wrong...</strong></span>
                    </div>
                    <div className="heading-description">
                        Please try again.
                    </div>
                </div>
            );
        }
        return(
            <div className="portal frame shadow-heavy">
                <div className="flex-col">

                </div>
            </div>
        );
    }

}

export default Portal;