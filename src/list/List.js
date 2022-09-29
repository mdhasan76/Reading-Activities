import React, { useState } from 'react';
import img from '../img/my-pic.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const List = ({ subjects, time }) => {
    // console.log(subjects)
    const [breakTime, setBreakTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // const { studyTime } = subjects;

    const addBreakTime = (time) => {
        localStorage.setItem('break-time', time);
        setBreakTime(time);
        setIsActive(current => !current)
    }
    return (<aside>

        <div className='flex justify-start items-center'>
            <img className='w-12 h-12 rounded-lg' src={img} alt="" />
            <div className='pl-2'>
                <h2 className='text-lg font-medium'>MD Hasan</h2>
                <p className='text-gray-500'><FontAwesomeIcon className='mx-1' icon={faLocationDot} />sarail, Brahmanbaria</p>
            </div>
        </div>

        <h3 className='py-4 text-2xl font-semibold'>Add A Break</h3>

        <div className='flex justify-around flex-wrap bg-slate-200 py-5 px-2 rounded-lg'>
            <button
                onClick={() => addBreakTime(2)}
                className='p-[10px] rounded-[50%] bg-white font-medium'>
                2m</button>
            <button
                onClick={() => addBreakTime(5)}
                className=' p-[10px] rounded-[50%] bg-white font-medium'>
                5m</button>
            <button
                onClick={() => addBreakTime(10)}
                className=' p-[10px] rounded-[50%] bg-white font-medium'>
                10m</button>
            <button
                onClick={() => addBreakTime(20)}
                style={{
                    backgroundColor: isActive ? '#22d3ee' : '',
                    color: isActive ? 'white' : '',
                }}
                className=' p-[10px] rounded-[50%] bg-white font-medium'>
                20m</button>
        </div>

        <h3 className='py-4 text-2xl font-semibold'>Exercise Details </h3>

        <div className=' bg-slate-200 flex justify-between p-3 rounded-lg text-lg my-5'>
            <p className='font-medium'>Exercise time </p>
            <p className='text-slate-500'>{time} min</p>
        </div>
        <div className=' bg-slate-200 flex justify-between p-3 rounded-lg text-lg my-5'>
            <p className='font-medium'>Break time </p>
            <p className='text-slate-500'>{breakTime} min</p>
        </div>
        <button className='w-full bg-cyan-400 rounded-lg text-white font-medium p-3 mt-4'>Activity Computed</button>
    </aside>
    );
};

export default List;