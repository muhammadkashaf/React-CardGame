import React from 'react';
import '../../App.css';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }



    increment = () => {
        this.setState(state => ({
            count: state.count  + 1
        }))
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }


}


export default Counter