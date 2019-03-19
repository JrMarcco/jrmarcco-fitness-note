import React from 'react';
import {Icon} from 'antd';
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
                    </div>

                    <SidebarAvatar/>
                </div>
            </div>
        );
    }
}

export default NoteIndex;
