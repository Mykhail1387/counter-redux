import React from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './Home/Home';
import StarRating from './StarRating/StarsRating';
import Counter from './Counter/Counter';

const App = () => {
    return (
        <div>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/star" component={StarRating} />
                <Route path="/counter" component={Counter} />
            </Switch>
        </div>
    )
}

export default App;