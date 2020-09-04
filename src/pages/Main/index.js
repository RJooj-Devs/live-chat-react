import React, { useEffect, useState } from 'react';

import Api from '../../services/api';

import io from 'socket.io-client';

import Header from '../../components/Header';

import Message from '../../components/Message';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Main({match}){
    const [ chat, setChat ] = useState({});
    const [ messages, setMessages ] = useState([]);

    const [ onboardMessage, setOnboardMessage ] = useState('');
    useEffect(()=>{
        const socket = io('http://localhost:3333', {
            query: {
                user: document.cookie.split('=')[1]
            }
        })
        async function loadChat(){
            const response = await Api.get(`/channel/${match.params.id}`);
            setChat(response.data);
        }
        async function loadMessages(){
            const response = await Api.get(`/message/${match.params.id}`);
            setMessages(response.data);
        }
        loadMessages();
        loadChat();
    }, []); 

    function fixDate(t){
        const ts = new Date(t);

        return ts.toLocaleString();   
    }
    async function sendText(){
        console.log(onboardMessage.split(' ').length)
        if(onboardMessage.split(' ').length < 1)
            return;

        await Api.post(`/message/${match.params.id}`, {
            headers: {
                user_id: document.cookie.split('=')[1]
            }
        });
    }
    return(
        <>
            <Header title = {chat.title}>
                <Link to = "/">
                    Home
                </Link>
            </Header>
            <div id = "container">
                <main>
                    <div className = "chat-container">
                        <div className = "messages">
                            { messages.map( msg =>{
                                return(
                                    <Message 
                                        key = {msg._id}
                                        content = {msg.content}
                                        author = {msg.author}
                                        time = {fixDate(msg.createdAt)}
                                        edited = {msg.edited}
                                        author_avatar = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
                                    />
                                );
                            })}
                            
                            
                        </div>
                        <div className = "text-input-wrapper">
                            <input 
                                type = "text" 
                                placeholder = "Type your text here" 
                                value = {onboardMessage}
                                onChange = { e => setOnboardMessage(e.target.value)}
                            />
                            <button onClick = {sendText} className = "send-text">Send</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
        
    );
}