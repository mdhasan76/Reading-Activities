import React, { useState } from 'react';
import img from '../img/my-pic.JPG';
import App from '../toast/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

const List = ({ time }) => {
    const [breakTime, setBreakTime] = useState(0);

    //get Localstorage data and set Break Time
    useEffect(() => {
        const storedTime = localStorage.getItem('break-time');
        if (storedTime) {
            setBreakTime(storedTime)
        }
    }, [])


    //Break time set
    const addBreakTime = (time) => {
        localStorage.setItem('break-time', time);
        setBreakTime(time);
    }
    return (<aside>

        <div className='lg:flex ;g:justify-start lg:items-center'>
            <div>
                <img className='w-16 h-16 lg:w-12 lg:h-12 rounded-lg mx-auto ' src={img} alt="" />
            </div>
            <div className='pl-2 text-center lg:text-left'>
                <h2 className='text-lg font-medium'>MD Hasan</h2>
                <p className='text-gray-500'><FontAwesomeIcon className='mx-1' icon={faLocationDot} />sarail, Brahmanbaria</p>
            </div>
        </div>

        <div className='bg-slate-200  my-3 p-3 rounded-lg sm:text-xs'>
            <h3 className='text-sm font-medium opacity-50'>Managment Department</h3>
            <h3 className='text-base font-medium'>Tongi Govt College, Tongi</h3>
        </div>

        <h3 className='py-4 text-lg lg:text-2xl font-semibold'>Add A Break</h3>

        <div className='flex justify-around flex-wrap bg-slate-200 py-5 px-2 rounded-lg'>
            <button
                onClick={() => addBreakTime(2)}
                className='p-[10px] rounded-[50%] bg-white font-medium my-2'>
                2m</button>
            <button
                onClick={() => addBreakTime(5)}
                className=' p-[10px] rounded-[50%] bg-white font-medium my-2'>
                5m</button>
            <button
                onClick={() => addBreakTime(10)}
                className=' p-[10px] rounded-[50%] bg-white font-medium my-2'>
                10m</button>
            <button
                onClick={() => addBreakTime(20)}
                className=' p-[10px] rounded-[50%] bg-white font-medium my-2'>
                20m</button>
        </div>

        <h3 className='py-4 text-lg lg:text-2xl font-semibold'>Exercise Details </h3>

        <div className=' bg-slate-200 text-center lg:flex justify-between p-3 rounded-lg md:text-sm lg:text-lg my-5'>
            <p className='font-medium'>Exercise time </p>
            <p className='text-slate-500 opacity-60'>{time} min</p>
        </div>
        <div className=' bg-slate-200 text-center lg:flex justify-between p-3 rounded-lg md:text-sm lg:text-lg my-5'>
            <p className='font-medium'>Break time </p>
            <p className='text-slate-500 opacity-60'>{breakTime} min</p>
        </div>
        <App></App>
    </aside>
    );
};

export default List;