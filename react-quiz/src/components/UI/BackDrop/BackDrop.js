import React from 'react'
import classes from './BackDrop.css'


// provides shadow on all content on the webpage and onClick - closes menubar
const BackDrop = props => <div className={'BackDrop'} onClick={props.onClick} />

export default BackDrop