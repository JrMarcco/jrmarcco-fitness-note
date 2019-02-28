import React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './index.css';

const {
    Header, Content, Footer, Sider,
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
            <Layout style={{minHeight: '100vh'}}>

            </Layout>
        );
    }
}

export default NoteIndex;
