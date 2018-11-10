import { connect } from 'react-redux'
import { sendMessage, receiveMessage } from './actions'
import Messages from './components/Messages'

const mapStateToProps = state => ({
  message: "",
  messages: [
    { message: "I wrote this", time: new Date(), me: true },
    { message: "They wrote this", time: new Date() }
  ]
})

const mapDispatchToProps = {
  sendMessage,
  receiveMessage
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default VisibleTodoList