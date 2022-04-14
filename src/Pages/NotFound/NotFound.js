import React from 'react';
import sleeping from '../../images/sleeping.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-primary my-5'>Mechanic is Sleeping</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;