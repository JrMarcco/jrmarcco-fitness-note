import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout, Row, Col, Button} from 'antd';
import './style.css';

const {
    Header, Footer, Content,
} = Layout;

@withRouter
class IndexHeader extends React.Component {
    render() {
        return (
            <div>
                <Row className={'header-row'}>
                    <Col span={8}>
                        <h2>Fitness Note</h2>
                    </Col>
                    <Col span={4} offset={12}>
                        <Button onClick={() => this.props.history.push('login')} size={'large'} className={'login-btn'}>登录</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

class Index extends React.Component {

    render() {
        return (
            <div id={'index-page'}>
                <Layout>
                    <Header className={'header'}>
                        <IndexHeader/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Index;
