import React from 'react';
import './style.css';

class Loading extends React.Component {
    render() {
        return (
            <div>
                <div className={'loading-show'}>
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                </div>
                <div className={'container-show'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default  Loading;
