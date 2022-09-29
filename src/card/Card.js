import React from 'react';

const Card = ({ subject, addList }) => {
    // console.log(subject)
    const { bookName, img, description, studyTime } = subject;
    return (
        <div className='border-1  p-3 rounded-xl relative shadow-xl'>
            <div><img className='rounded-xl' src={img} alt="" /></div>
            <h2 className='text-[20px] py-2 font-semibold'>{bookName}</h2>
            <p className='text-gray-400'>{description}</p>
            <h3 className='font-medium my-2 mb-12'> Time For study: {studyTime}Min
            </h3>
            <button
                className='w-[90%] mx-auto my-2 bg-cyan-400 rounded-lg text-white font-medium py-2 absolute bottom-0'
                onClick={() => addList(studyTime)}>
                Add to Reading list</button>
        </div>
    );
};

export default Card;