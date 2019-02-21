import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout, Row, Col, Button, Form, Input, Icon, Divider } from 'antd';
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
                    <Col span={8} offset={8}>
                        <Button ghost onClick={() => this.props.history.push('login')} size={'large'} className={'login-btn'}>登录</Button>
                    </Col>
                </Row>
                <Divider className={'header-line'} />
            </div>
        );
    }
}

@Form.create()
class RegisterForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password.length < 6) {
                    this.props.form.setFields({
                        password: {
                            value: values.password,
                            errors: [new Error('密码需包含至少6个字符')]
                        }
                    });
                    return;
                }
                // 执行注册动作
                console.log(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className={'register-form'}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名'}]
                        })(
                            <Input prefix={
                                <Icon type={'user'} style={{color: 'rgba(0,0,0,.25)'}}/>
                            } maxLength={16} placeholder={'用户名'}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}]
                        })(
                            <Input prefix={
                                <Icon type={'lock'} style={{color: 'rgba(0,0,0,.25)'}}/>
                            } type={'password'} maxLength={16} placeholder={'密    码'}/>
                        )}
                    </Form.Item>
                    <Button type={'primary'} htmlType={'submit'} className={'register-btn'}>
                        立即注册
                    </Button>
                </Form>
            </div>
        );
    }
}

class IndexContent extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        <div className={'title'}>
                            Use
                            <span> Fitness Note</span>
                        </div>
                    </Col>
                    <Col span={12} offset={6}>
                        <RegisterForm/>
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
                <Layout className={'layout'}>
                    <Header className={'header'}>
                        <IndexHeader/>
                    </Header>
                    <Content className={'content'}>
                        <IndexContent/>
                    </Content>
                    <Footer className={'footer'}>
                        <div className={'footer-wrap'}>
                            <Row>
                                <Col span={24}>Footer</Col>
                            </Row>
                        </div>
                        <div className={'bottom-bar'}>
                            Made by
                            <a target={'_blank'} className={'author'} href={'https://github.com/JrMarcco'}> JrMarcco</a>
                        </div>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Index;
