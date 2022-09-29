import React from 'react';
import img from '../img/my-pic.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const List = () => {
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
            <p className=' p-[10px] rounded-[50%] bg-white font-medium'>2 m</p>
            <p className=' p-[10px] rounded-[50%] bg-white font-medium'>5 m</p>
            <p className=' p-[10px] rounded-[50%] bg-white font-medium'>10 m</p>
            <p className=' p-[10px] rounded-[50%] bg-white font-medium'>15 m</p>
        </div>

        <h3 className='py-4 text-2xl font-semibold'>Exercise Details </h3>

        <div className=' bg-slate-200 flex justify-between p-3 rounded-lg text-lg my-5'>
            <p className='font-medium'>Exercise time </p>
            <p className='text-slate-500'>200 second</p>
        </div>
        <div className=' bg-slate-200 flex justify-between p-3 rounded-lg text-lg my-5'>
            <p className='font-medium'>Break time </p>
            <p className='text-slate-500'>15 second</p>
        </div>
        <button className='w-full bg-cyan-400 rounded-lg text-white font-medium p-3 mt-4'>Activity Computed</button>
    </aside>
    );
};

export default List;