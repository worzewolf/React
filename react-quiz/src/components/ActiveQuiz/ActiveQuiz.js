import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'


// render main block of question and num position
const ActiveQuiz = props => {
    // console.log('Active', props);
    return (
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>

        <AnswersList 
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
    )
}

export default ActiveQuiz