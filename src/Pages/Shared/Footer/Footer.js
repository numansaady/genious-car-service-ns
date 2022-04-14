import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='text-center py-3 bg-secondary text-white fw-bold'>
            <p>Copyright &copy; {year} </p>
        </div>
    );
};

export default Footer;