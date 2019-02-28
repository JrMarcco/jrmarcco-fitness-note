import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';
import './index.css';

const {Header} = Layout;

@withRouter
class NoteIndex extends React.Component {
    render() {
        return (
            <Header id={'header'}>
                <Row className={'header-row'}>
                    <Col span={4}>
                        <h2 className={'header-title'} onClick={() => this.props.history.push('/')}>Fitness Note</h2>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default NoteIndex;
