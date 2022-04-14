import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div className='container mx-auto text-center'>
            <h2>Welcome to Service Detail: {serviceId} </h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Check Out</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;