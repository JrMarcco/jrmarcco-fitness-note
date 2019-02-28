import React from 'react';
import {Layout, Icon} from 'antd';
import NoteHeader from '../../components/NoteHeader/index';
import './index.css';

const {
    Header, Content, Sider, Footer
} = Layout;

class NoteIndex extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout>
                <NoteHeader/>
                <Layout id={'note-index'}>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default NoteIndex;
