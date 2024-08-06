import React, { Component } from 'react';

// Define an interface for the state
interface CounterState {
    count: number;
}

// Use TypeScript syntax for the class component
class Counter extends Component<{}, CounterState> { 
    // Define the initial state
    state: CounterState = {
        count: 0
    };

    // Define the increment method with proper typing
    increment = (): void => {
        this.setState({ count: this.state.count + 1 }); 
    };

    render() { 
        return (
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
} 

export default Counter;
