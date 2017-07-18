import {Component} from 'react'

class ChatSideBar extends Component {

  constructor (props) {
    super(props)
    this.addUser = this.addUser.bind(this)
  }
  addUser (event) {
    let userData = {
      userName: event.target.value
    }
    let timeStamp = (new Date()).getTime()
    const user = {
      [`user-id${timeStamp}`]: userData
    }
    this.props.func_renderChatPanel({ key: Object.keys(user)[0], userName: userData.userName })
  }

  render () {
    return (
      <div className='sideBar'>
        <p> ChatSideBar </p>
        <style jsx>{`
          .sideBar {
            width: 200px;
            height: 750px;
            right: 0px;
            top: 0px;
            padding-top: 10px;
            padding-bottom: 10px;
            border: 1px solid rgba(29, 49, 91, .3);
          },
          .
        `}</style>

          <input type='button' onClick={this.addUser} value='user1' />
          <br /> <br />
          <input type='button' onClick={this.addUser} value='user2' />

      </div>
    )
  }
}

export default ChatSideBar
