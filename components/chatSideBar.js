import {Component} from 'react'

class ChatSideBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: {}
    }
    this.addUser = this.addUser.bind(this)
  }
  addUser (event) {
    console.log('event.target.value = ', event.target.value)
    let userData = {
      userName: event.target.value
    }
    console.log('<chatSideBar.js addUser > userData = ', userData)
    var timeStamp = (new Date()).getTime()
    const user = {
      [`user-id${timeStamp}`]: userData
    }
    console.log('<chatSideBar.js addUser > user = ', JSON.stringify(user))
    this.setState({ users: Object.assign(this.state.users, user) })
    console.log('<chatSideBar.js addUser > this.state.users = ', JSON.stringify(this.state.users))
    console.log('<chatSideBar.js addUser > Object.keys(user) = ', Object.keys(user)[0])
    this.props.func_renderChatPanel({ key: Object.keys(user)[0], user: this.state.users[Object.keys(user)[0]] })
  }

  render () {
    return (
      <div className='sideBar'>
        <p> ChatSideBar </p>
        <style jsx>{`
          .sideBar {
            width: 200px;
            position: fixed;
            height: 100%;
            right: 0px;
            top: 0px;
            padding-top: 10px;
            padding-bottom: 10px;
            border: 1px solid rgba(29, 49, 91, .3);
          },
          .
        `}</style>
        <input type='button' onClick={this.addUser} value='user1' />
      </div>
    )
  }
}

export default ChatSideBar
