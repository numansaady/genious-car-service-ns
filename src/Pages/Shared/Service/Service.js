import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service-item'>
            <img src={img} className='w-100' alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;