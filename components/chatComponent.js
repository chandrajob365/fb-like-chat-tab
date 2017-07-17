import {Component} from 'react'
import ChatSideBar from '../components/chatSideBar'
import ChatPannel from '../components/chatPannel'
import store from '../global/globalStore'
class ChatComponent extends Component {
  constructor (props) {
    super (props)
    this.renderChatPanel = this.renderChatPanel.bind(this)
    this.renderPanel = this.renderPanel.bind(this)
    this.state ={
      user: {}
    }
  }
  static async getInitialProps (props) {
      return {}
  }

// {"user":{
//   "user-id1500311842111":{"name":"user1"},
//   "user-id1500312062218":{"name":"user1"},
//   "user-id1500312085303":{"name":"user1"}
//   }
// }
  renderChatPanel (obj) {
    console.log('<chatComponent.js renderChatPanel> obj.key = ', obj.key , '  obj.user = ', obj.user, '  obj.user.userName = ', obj.user.userName)
    console.log('<chatComponent.js renderChatPanel> this.state.users = ', this.state.user)

    localStorage.setItem(obj.key ,JSON.stringify({
       [obj.key]: {name: obj.user.userName}
     }))
    // const userData = {
    //    [obj.key]: {name: obj.user.userName}
    //  }
     console.log('********** <chatComponent.js renderChatPanel> *******  userData = ', JSON.parse(localStorage.getItem(obj.key)))
    this.setState({
       user: Object.assign(this.state.user, JSON.parse(localStorage.getItem(obj.key)))
    })
    console.log('********** <chatComponent.js renderChatPanel> *******  this.state = ', JSON.stringify(this.state))
     console.log('<chatComponent.js renderChatPanel> this.state.user = ', JSON.stringify(this.state.user))
     console.log('<chatComponent.js renderChatPanel> {Object.keys(this.state.user) = ', Object.keys(this.state.user))

  }

  renderPanel (key) {
    console.log('<chatComponent.js renderPanel > key = ', key, ' user = ', this.state.user[key])
    return (

          <ChatPannel  key={key} index={key} details= {{key: key, user: this.state.user[key] }} />
      )
  }
  render () {
    return (
      <div>
        <ChatSideBar func_renderChatPanel = {this.renderChatPanel}/>
        {Object.keys(this.state.user).map(this.renderPanel)}
      </div>
    )
  }
}

export default ChatComponent
