import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { addMessage, updateMessage } from './actions'
import Messages from './components/Messages'

const getMessage = pathOr('', 'message')

const mapStateToProps = state => {
  return {
    message: state.message,
    messages: state.messages
  }
}

const mapDispatchToProps = {
  addMessage,
  updateMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)