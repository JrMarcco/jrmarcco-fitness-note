import React from 'react';
import './style.css';

class Loading extends React.Component {

    renderLoading = (suffix) => {
        return (
            <div>
                <div className={'loading-' + suffix}>
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                    <span className={'dot'} />
                </div>
                <div className={'container-' + suffix}>
                    {this.props.children}
                </div>
            </div>
        );
    };

    render() {
        const {loading} = this.props.loading;
        if (loading) {
            return this.renderLoading('show');
        } else {
            return this.renderLoading('hide');
        }
    }
}

export default  Loading;
