import React from 'react';
import {Drawer, Icon, Button} from 'antd';
import SidebarAvatar from '../../components/SidebarAvatar/index';
import './index.css';

class NoteIndex extends React.Component {
    render() {
        return (
            <div>
                <div id={'note-sidebar'}>
                    <div className={'sidebar-logo'}>
                        <image/>
                    </div>

                    <div className={'sidebar-tool'}>
                        <div className={'tool-button'}>
                            <Button type="primary" shape="circle" icon="plus" size={'large'} />
                        </div>
                    </div>

                    <SidebarAvatar/>
                </div>
            </div>
        );
    }
}

export default NoteIndex;
