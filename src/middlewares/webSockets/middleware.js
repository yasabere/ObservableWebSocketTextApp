const webSocketsMiddleware = store => {
  let ws = new WebSocket('ws://echo.Websocket.org')
  ws.onmessage = (e) => {
    store.dispatch(JSON.parse(e.data))
  }

  ws.onclose = () => {
    console.log('socket closed')
  }

  ws.onerror = () => {
    console.log('onerror')
  }

  ws.onopen = () => {
    console.log('socket connected')
  }

  return next => action => {

    const { websocket, ...message } = action

    if (websocket) {
      ws.send(JSON.stringify(message))
      return
    }

    next(message);
  }
}

export default webSocketsMiddleware