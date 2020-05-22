import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App" >
                <Layout />
            </div>
        </Router>
    )
}
export default App;