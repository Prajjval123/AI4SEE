import React from 'react';
import './ButtonSecondary.css';
const ButtonSecondary = ({children}) => {
    return (
        <div className='btn-sec'>
           {children}
            <span></span><span></span><span></span><span></span>
        </div>
    );
};

export default ButtonSecondary;