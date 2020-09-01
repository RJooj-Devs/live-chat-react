import React from 'react';

import './styles.css';

export default function Header({ title, children }){
    return(
        <header>
            <div className = "header-wrapper">
                <h2>{title}</h2>
            </div> 
            <div className = "header-wrapper">
                <p>
                    {children}
                </p>  
            </div>
        </header>
    );
}