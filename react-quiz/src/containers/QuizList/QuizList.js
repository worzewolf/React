import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.css'
import Loader from '../../components/UI/Loader/Loader'
import axios from '../../axios/axios-quiz'


export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    // componentDidMount() {
    //     axios.get('https://react-quiz-d93dd.firebaseio.com/quiz.json').then(response => {
    //         console.log(response)
    //     })
    // }

    async componentDidMount(){
        try {
            const response = await axios.get('/quizes.json')


            const quizes = []

            // console.log(response.data);
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test №${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={'QuizList'}>
                <div>
                    <h1>List of Tests</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            :   <ul>
                                    {this.renderQuizes()}
                                </ul>
                    }
                </div>
            </div>
        )
    }
}
