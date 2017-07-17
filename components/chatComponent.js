import {Component} from 'react'
import ChatSideBar from '../components/chatSideBar'
import ChatPannel from '../components/chatPannel'
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
    let userDataFromLS = JSON.parse(localStorage.getItem(obj.key))
      return {userDataFromLS}
  }
  componentDidMount () {
    console.log('<chatComponent>componentDidMount ********* window ******** ', window);
    const userData = window.userData
    this.setState({
       user: Object.assign(this.state.user, userData)
    })
  }
componentWillUnmount() {
  console.log('----- <chatComponent>componentWillUnmount ------- ');

}
  renderChatPanel (obj) {
    console.log('renderChatPanel ********* window ******** ', window);
    console.log('<chatComponent.js renderChatPanel> obj.key = ', obj.key , '  obj.user = ', obj.user, '  obj.user.userName = ', obj.user.userName)
    console.log('<chatComponent.js renderChatPanel> this.state.users = ', this.state.user)

    window.userData = {
       [obj.key]: {name: obj.user.userName}
     }
     console.log('********** <chatComponent.js renderChatPanel> *******  userData = ', window.userData)
    this.setState({
       user: Object.assign(this.state.user, window.userData)
    })
     console.log('********** <chatComponent.js renderChatPanel> *******  this.state = ', this.state)
      console.log('<chatComponent.js renderChatPanel> this.state.user = ', this.state.user)
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
