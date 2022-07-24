import React from 'react';

const FileComponent = () => {
    return (
        <li className="menuElement">File
            <ul className="subMenu fileSubMenu">
                <li>New</li>
                <li>Open</li>
                <li>Save</li>
                <li>Save as...</li>
            </ul>
        </li>
    );
};

export default FileComponent;