import React, { Component } from "react";

import "./Messages.scss";

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleInputChange(e) {
    this.props.sendMessage(e.target.value)
  }

  handleKeyDown(e) {
    const { message, messages } = this.state;

    const newMessage = { message, time: new Date(), me: true }

    if (e.key === 'Enter') {
      this.setState({ messages: [...messages, newMessage], message: '' })
    }
  }


  render() {
    const { message, messages } = this.props;

    return (
      <div className={"messages"}>
        Messages
        {messages &&
          messages.map(message => (
            <div
              className={
                { true: "me", false: "them", undefined: "them" }[message.me]
              }
            >
              {message.message}
            </div>
          ))}
        <div
          className={"textField"}>
          <input value={message} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
        </div>

      </div>
    );
  }
}
