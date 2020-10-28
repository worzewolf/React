import React, {Component} from 'react'
import classes from './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drower from '../../components/Navigation/Drower/Drower'


//Renders all components on page, used to wrap 'em
class Layout extends Component {
    
    state ={
        menu: false
    }
    
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render () {
        return (
            <div className={'Layout'}>

                <Drower 
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout