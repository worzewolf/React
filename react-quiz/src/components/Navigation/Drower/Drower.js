import React, {Component} from 'react'
import classes from './Drower.css'
import BackDrop from '../../UI/BackDrop/BackDrop'

const links = [
    1, 2, 3
]


// Renders menu sidebar with links
class Drower extends Component {
    
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }
    
    render() {
        const cls = ['Drower']

        if(!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? 
                <BackDrop onClick={this.props.onClose} /> :
                null }
            </React.Fragment>
        )
    }
}

export default Drower