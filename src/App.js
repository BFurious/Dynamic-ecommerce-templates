import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductOptions from './components/main';


const App = () => {
    // Check if user is logged in (you can also use context or state management here)
    //router to our main project
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductOptions />} />
            </Routes>
        </Router>
    );
};

export default App;
