import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/about/about';
import HomeComponent from './pages/home/home';
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={HomeComponent} exact/>
                <Route path="/about" component={About} exact/>
            </BrowserRouter>
        </div>
    )
}

export default Router
