import React from 'react';
import SidebarAvatar from '../../components/Avatar/index';
import './index.css';

class NoteIndex extends React.Component {
    render() {
        return (
            <div>
                <div id={'note-sidebar'}>
                    <SidebarAvatar/>
                </div>
            </div>
        );
    }
}

export default NoteIndex;
