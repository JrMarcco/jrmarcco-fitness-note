import React from 'react';
import {Avatar} from 'antd';
import './index.css';

class NoteIndex extends React.Component {
    render() {
        return (
            <div>
                <div id={'note-sidebar'}>
                    <div className={'avatar'}>
                        <Avatar size={48} icon="user"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteIndex;
