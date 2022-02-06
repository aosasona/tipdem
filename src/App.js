import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/start';
import About from './components/About';
import Error  from './components/Error';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Start} exact />
                <Route path="/about" component={About} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

export default App;