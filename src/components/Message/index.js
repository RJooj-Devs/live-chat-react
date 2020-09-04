import React from 'react';

import './styles.css'
export default function Message({ content, author, author_avatar, time, edited }){
    return(
        <div className = "message">
            <div className = "pfp" style = {{ backgroundImage: `url(${author_avatar})`}}>
                
            </div>
            <div className = "msg-all">
                <header>
                    <span className = "msg-author">{author}</span>
                    <span className = "msg-time">{time}</span>
                </header>
                <p className = "msg-content">
                    {content}
                    <span className = "edit">
                        { edited ? "(edited)" : ""}
                    </span>
                </p>
                
            </div>
                                
        </div>
    );
}