import React from 'react';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';
import {Popover, Avatar, Button, Icon} from 'antd';
import './index.css';

@withRouter @inject('appStore')
class SidebarAvatar extends React.Component {
    logout = (e) => {
        e.preventDefault();

        this.props.appStore.toggleAuth(false);
        this.props.history.push('/');
    };

    render() {
        return (
            <div id={'avatar'}>
                <Popover placement="rightBottom" title={(
                    // Popover Title
                    <div id={'popover-title'}>
                        <Avatar size={64} icon="user"/>
                    </div>
                )} content={(
                    // Popover Content
                    <div id={'popover-content'}>
                        <p>
                            <Button className={'btn'} onClick={this.logout}>
                                <Icon type="logout"/>退出登录
                            </Button>
                        </p>
                    </div>
                )} trigger="click">
                    <Avatar size={48} icon="user"/>
                </Popover>
            </div>
        );
    }
}

export default SidebarAvatar;
