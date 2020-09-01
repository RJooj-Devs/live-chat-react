import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

export default function Login(){
    const [ username, setUsername ] = useState('');
    const [ avatar_url, setAvatarUrl ] = useState('');
    const [ chatID, setChatID ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

    }
    return (
        <>
            <Header title = "Join Us">

            </Header>
            <main>
                <h3>H3 subtitle</h3>
                <form onSubmit = {handleSubmit}>
                    <legend>User info</legend>
                    <fieldset>
                        <div className = "input-wrapper">
                            <label htmlFor = "username">Username</label>
                            <input
                                name = "username" 
                                type = "text" 
                                className = "form-input"
                                value = {username}
                                onChange = { e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className = "input-wrapper">
                            <label htmlFor = "avater_url">Avatar Url</label>
                            <input
                                name = "avatar_url" 
                                type = "url" 
                                className = "form-input" 
                                value = {avatar_url}
                                onChange = { e => setAvatarUrl(e.target.value)}
                            />
                        </div>
                    </fieldset>
                    <legend>Chat info</legend>
                    <fieldset>
                        <div className = "input-wrapper">
                            <label htmlFor = "chatID">Chat ID, <span id = "minus">your friends must send it for you</span></label>
                            <input
                                name = "chatID" 
                                type = "text" 
                                className = "form-input" 
                                value = {chatID}
                                onChange = { e => setChatID(e.target.value)}
                            />
                        </div>
                        <button type = "submit" className = "form-button">
                            Aight, Imma head in!
                        </button>
                    </fieldset>
                </form>
                <footer>
                    <a href = "#">I wanna have my own chat?</a>
                </footer>
            </main>
        </>
    );
}