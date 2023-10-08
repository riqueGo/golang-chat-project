import React, {Component} from 'react';
import './ChatInput.scss';


class ChatInput extends Component {

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed')
            this.props.send(e.target.value);
            e.target.value = '';
        }
      }
    
    render() {
        return(
            <div className="ChatInput">
                <input onKeyPress={this._handleKeyDown} placeholder="Type a message... Hit enter to send"></input>
            </div>
        );
    }
}

export default ChatInput;