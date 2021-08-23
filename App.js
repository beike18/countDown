import React, { Component } from 'react';

import './App.css'
import Counter from "./counter";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* add your code... */}
                    <Counter />
                </header>
            </div>
        );
    }
}

export default App;