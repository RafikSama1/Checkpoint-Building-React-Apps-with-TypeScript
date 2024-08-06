import React from 'react';

// Define an interface for the props
interface GreetingProps {
    name: string;
}

// Use TypeScript syntax for the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
    return <div>Hello, {name}!</div>;
};

export default Greeting;
