import React, {Component} from 'react'
import Auxillary from '../hoc/Auxillary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        // base approach //
        // this.setState({
        //     counter: this.state.counter +1
        // })

        // safer approach //
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    
    render() {
        return (
            <Auxillary>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxillary>
        )


        //alternative render via massive. p.s. massive demands 'keys' to each element of massive //
        // return [
        //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //     <button key={'2'} onClick={this.addCounter}>+</button>,
        //     <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>    
        // ]
    }
}