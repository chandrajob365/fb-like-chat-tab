import {Component} from 'react'

class ChatPannel extends Component {
  render () {
    return (
      <div className='pannel'>
        <p> Name - {this.props.details.userName}</p>
        <style jsx>{`
          .pannel {
            align-items: flex-end;
            padding: 5px;
            margin-top: auto;
            margin-left: 10px;
            margin-right: 10px;
            height: 285px;
            background-color: rgb(237, 239, 244);
            width: 300px;
            border: '1px solid rgba(29, 49, 91, .3);
          }
        `}</style>
      </div>
    )
  }
}

export default ChatPannel
