import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'


// Main component with all settings of all components to render
class Quiz extends Component {
    state = {
        results: {}, // {[id]: success error }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'sucess' 'error' }
        quiz: [
            {
                question: 'What color is sky?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Blue', id:1},
                    {text: 'Black', id:2},
                    {text: 'Red', id:3},
                    {text: 'Green', id:4}
                ]
            },
            {
                question: 'Year of foundation S-burg?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id:1},
                    {text: '1702', id:2},
                    {text: '1703', id:3},
                    {text: '1803', id:4}
                ]
            }
        ]
      }

      onAnswerClickHandler = (answerId) => {
        //   console.log('Answer id: ', answerId);

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

          const question = this.state.quiz[this.state.activeQuestion]
          const results = this.state.results

          if(question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })

            const timeOut = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    // console.log('finished');
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeOut)
            }, 1000)

          } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
          }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render () {
        return (
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Answer all questions</h1>


                    {
                        this.state.isFinished 
                        ? <FinishedQuiz 
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        :
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz