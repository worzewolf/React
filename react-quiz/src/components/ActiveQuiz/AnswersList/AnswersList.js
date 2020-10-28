import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'


// render answers-list in ActiveQuiz component
const AnswersList = props => { 
    // console.log('List', props);
    return (
    <ul className={'AnswersList'}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        }) }
    </ul>
    )
}

export default AnswersList