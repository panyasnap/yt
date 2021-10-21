import React from 'react';

const Info = ({text}) => {
    return (
        <div key={text.id}>
            <div className='mb-2 mt-2 text-center'>{text.textUser.map((item, index) => <span key={index}>{item} </span>)}</div>
        </div>
    );
};

export default Info;