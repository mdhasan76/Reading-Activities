import React from 'react';
import Card from '../card/Card'
import List from '../list/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';

const Activities = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch("activities.json")
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])
    return (
        <main>
            <div className='grid grid-cols-4'>
                <div className='col-span-3 w-9/12 mx-auto my-20'>
                    <h3 className='text-3xl font-semibold text-cyan-400'> <FontAwesomeIcon icon={faBookOpenReader} /> DAILY STUDY ROUTIN</h3>
                    <h5 className='text-lg font-medium py-6'>Select Today's Subjects</h5>
                    <div className='grid grid-cols-3 gap-5'>
                        {subjects.map(subject => <Card subject={subject}></Card>)}
                    </div>
                </div>
                <div className='py-8 px-8'>
                    <List></List>
                </div>
            </div>
        </main>
    );
};

export default Activities;