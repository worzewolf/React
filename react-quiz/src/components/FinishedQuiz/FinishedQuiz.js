import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

// renders total after answering all questions with counting right/false & buttons to retry Quiz
const FinishedQuiz = props => {
    const successCount =  Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={'FinishedQuiz'}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success'
                    ]

                    return (
                    <li
                        key={index}
                    >
                        <strong>{index + 1}</strong>.&nbsp;
                        {quizItem.question}
                        <i className={cls.join(' ')}/>
                    </li>
                    )

                }) }
            </ul>

            <p>right answ {successCount} / {props.quiz.length}</p>

            <div>
                <Button 
                    onClick={props.onRetry} 
                    type="primary"
                >
                        Repeat
                </Button>
                <Link to="/">
                    <Button 
                        onClick={props.onRetry} 
                        type="success"
                    >
                            Go to list
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz