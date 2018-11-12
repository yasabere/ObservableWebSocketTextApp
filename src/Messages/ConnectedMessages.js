import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { sendMessage, receiveMessage, updateMessage } from './actions'
import Messages from './components/Messages'

const getMessage = pathOr('', 'message')

const mapStateToProps = state => {
  return {
    message: state.message,
    messages: state.messages
  }
}

const mapDispatchToProps = {
  sendMessage,
  receiveMessage,
  updateMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)