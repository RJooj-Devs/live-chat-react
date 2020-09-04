import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import Api from '../../services/api';

import './styles.css';

export default function Login({ history }){
    const [ username, setUsername ] = useState('');
    const [ avatar_url, setAvatarUrl ] = useState('');
    const [ chatID, setChatID ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await Api.post('/user', {
            username,
            avatar_url
        });
        document.cookie = `user=${response.data._id}`;

        Api.get(`/invite/${chatID}`,{
            headers:{
                user_id: response.data._id
            }
        }).then(()=> history.push(`/chat/${chatID}`))
          .catch(err => alert('It seems a invalid id'));


    }
    async function checkFields(){
        if(username.length === 0 || avatar_url.length === 0)
            return alert('Preencha os campos');
        
        const response = await Api.post('/user', {
            username,
            avatar_url
        });
        document.cookie = `user=${response.data._id}`;

        history.push('/new-chat');
    }
    return (
        <>
            <Header title = "Join Us">

            </Header>
            <main>
                
                <form onSubmit = {handleSubmit}>
                    <h3>H3 subtitle</h3>
                    <legend>User info</legend>
                    <fieldset>
                        <div className = "input-wrapper">
                            <label htmlFor = "username">Username</label>
                            <input
                                required
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
                                required
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
                                required
                                name = "chatID" 
                                type = "text" 
                                className = "form-input" 
                                value = {chatID}
                                onChange = { e => setChatID(e.target.value)}
                            />
                        </div>
                        <div className = "button-wrapper">
                            <button type = "submit" className = "form-button">
                                Aight, Imma head in!
                            </button>
                            <button type = "button" className = "form-button-2" onClick = {checkFields}>I wanna have my own chat</button>
                        </div>
                        
                    </fieldset>
                </form>
                <footer>
                    
                </footer>
            </main>
        </>
    );
}