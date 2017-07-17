import {Component} from 'react'

class ChatPannel extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    console.log('<chatPannel.js render >this.props.details = ', this.props.details)
    console.log('<chatPannel.js render >this.props.details.user.name = ', this.props.details.user.name)
    return (
      <div className = 'pannel'>
        <p> Name -  {this.props.details.user.name}</p>
        <style jsx>{`
          .pannel {
            display: block;
            position: fixed;
            padding: 5px;
            bottom: 0px;
            right: 220px;
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
