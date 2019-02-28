import React from 'react';
import {Popover, Avatar, Button, Icon} from 'antd';
import './index.css';

const title = (
    <div id={'popover-title'}>
        <Avatar size={64} icon="user"/>
    </div>
);
const content = (
    <div id={'popover-content'}>
        <p>
            <Button className={'btn'}>
                <Icon type="logout"/>退出登录
            </Button>
        </p>
    </div>
);

class SidebarAvatar extends React.Component {
    render() {
        return (
            <div id={'avatar'}>
                <Popover placement="rightBottom" title={title} content={content} trigger="click">
                    <Avatar size={48} icon="user"/>
                </Popover>
            </div>
        );
    }
}

export default SidebarAvatar;
