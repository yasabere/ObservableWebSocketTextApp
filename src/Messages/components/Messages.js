import React, { Component } from "react";

import "./Messages.scss";

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [
        { message: "I wrote this", time: new Date(), me: true },
        { message: "They wrote this", time: new Date() }
      ]
    };
  }

  render() {
    const { messages } = this.state;

    return (
      <div className={"messages"}>
        Messages
        {messages &&
          messages.map(message => (
            <div className={"message"}>
              <div
                className={
                  { true: "me", false: "them", undefined: "them" }[message.me]
                }
              >
                {message.message}
              </div>
            </div>
          ))}
        <textarea />
      </div>
    );
  }
}
