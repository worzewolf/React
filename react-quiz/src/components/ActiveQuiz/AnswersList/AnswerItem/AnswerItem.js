import React from 'react'
import classes from './AnswerItem.css'


// render each answer in AnswerList component
const AnswerItem = props => {
    // console.log(props);

    const cls = ['AnswerItem']

    if (props.state) {
        cls.push([props.state])
    }

    return (
        <li 
            className={cls.join(' ')} 
            onClick={() => props.onAnswerClick(props.answer.id)}
            >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem