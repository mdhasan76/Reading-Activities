import React from 'react';

const Blog = () => {
    return (
        <section className='max-w-3xl mx-auto mt-14 my-12 bg-slate-100 p-5 rounded'>
            <h1 className='text-4xl font-bold my-5'>Most important Quastion :</h1>
            <div className='my-5 p-4'>
                <h2 className='text-3xl font-semibold py-3'>1. How does React works?</h2>
                <p className='text-gray-500 py-4'>React is a Javascript library. most probably React used for interactive UI. it is component base . It works like Javascript Function . In react we can right like html code in js file. This html code compile js object with JSX method. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>
            <div className='my-5 p-4'>
                <h2 className='text-3xl font-semibold py-3'>2. Difference between Props and State?</h2>
                <p className='text-gray-500 py-4'><strong>Props</strong> is used to pass data from one to another component. props is immutable . it can not be change or modify. props are read only . it can be used with state and functional component. <strong>State</strong> The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component. It is mutable . it can be modify or change</p>
            </div>
            <div className='my-5 p-4'>
                <h2 className='text-3xl font-semibold py-3'>3. What is the purpose of useEffect in addition to data load?</h2>
                <p className='text-gray-500 py-4'>When need to load without browser or component then declear useEffect . the main purpose of useEffect is load data from externel . useEffect run every render after every update. lots of cause we can use useEffect for fetch api, validition input field, live filtering, trigger animation on new array value etc.</p>
            </div>
        </section>
    );
};

export default Blog;