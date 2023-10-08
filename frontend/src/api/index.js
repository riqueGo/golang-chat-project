var socket = new WebSocket('ws://localhost:8080/ws');

let connect = (cb) => {
    console.log('Connecting...')

    socket.onopen = () => {
        console.log('successfully connected')
    }

    socket.onmessage = (msg) => {
        cb(msg)
        console.log('received message:', msg)
    }

    socket.onclose = (event) => {
        console.log('socket disconnected:', event)
    }

    socket.onerror = (error) => {
        console.log('socket error:', error)
    }
};

let sendMsg = (msg) => {
    console.log('sending msg:', msg)
    socket.send(msg);
}

export {connect, sendMsg}