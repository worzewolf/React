import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-d93dd.firebaseio.com/'
})