import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const notify = () => {

        toast.success('Activities Complate successful',
            { position: toast.POSITION.TOP_CENTER })
    };

    return (
        <div>
            <button onClick={notify} className="w-full bg-cyan-400 rounded-lg text-white font-medium p-3 mt-4">Activity Complated</button>
            <ToastContainer />
        </div>
    );
}
export default App;
