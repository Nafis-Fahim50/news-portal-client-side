import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
           <h2>Check Our Terms and Condition</h2>
           <p>Go back to <Link to='/register'>Register Page</Link></p> 
        </div>
    );
};

export default TermsAndCondition;