import React from 'react'
import classes from './MenuToggle.css'


// render toggle burger button topLeftPage for Drower Component
const MenuToggle = props => {
    const cls = [
        'MenuToggle ',
        'fa '
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push('open')
    } else {
        cls.push('fa-bars')
    }


    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle