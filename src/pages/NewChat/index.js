import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import Api from '../../services/api';

import './styles.css';

export default function NewChat({ history }){
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ picture, setPicture ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await Api.post('/channel', {    
            headers: {
                user_id: document.cookies.split('=')[1]
            },
            title,
            description,
            picture
        });

        history.push(`/chat/${response.data._id}`);
    }
    return(
        <>
            <Header title = "Your own chat, uh?">
                <Link to = "/">&larr;</Link>
            </Header>
            <main>
                <form onSubmit = {handleSubmit}>
                    <h3>Do it</h3>
                    <legend>Server Info</legend>
                    <fieldset>
                        <div className = "input-wrapper">
                            <label htmlFor = "title">Your chat's name</label>
                            <input 
                                required 
                                name = "title" 
                                className = "form-input"
                                type = "text"
                                value = {title}
                                onChange = {e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className = "input-wrapper">
                            <label htmlFor = "description">Your chat's description</label>
                            <input 
                                required 
                                name = "description" 
                                className = "form-input" 
                                type = "text" 
                                value = {description}
                                onChange = {e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className = "input-wrapper">
                            <label htmlFor = "picture">Your chat's picture</label>
                            <input 
                                required 
                                name = "picture" 
                                className = "form-input" 
                                type = "url" 
                                value = {picture}
                                onChange = { e => setPicture(e.target.value)}
                            />
                        </div>
                        <div className = "button-wrapper">
                            <button className = "form-button">
                                Let's go
                            </button>
                        </div>
                    </fieldset>
                    
                    
                </form>
            </main>

        </>
    )
}