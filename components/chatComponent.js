import {Component} from 'react'
import ChatSideBar from '../components/chatSideBar'
import ChatPannel from '../components/chatPannel'
import Store from '../globalStore/store'
class ChatComponent extends Component {
  constructor (props) {
    super(props)
    this.renderChatPanel = this.renderChatPanel.bind(this)
    this.renderPanel = this.renderPanel.bind(this)
    this.state = {
      user: {}
    }
  }
  componentDidMount () {
    this.setState({
      user: Object.assign(this.state.user, Store.userData)
    })
  }
  renderChatPanel (obj) {
    if (this.componentAlreadyRendered(obj.userName) === 0) {
      if (Store.userData)
        Store.userData = Object.assign(Store.userData, {[obj.key]: obj.userName})
      else
        Store.userData = Object.assign({}, {[obj.key]: obj.userName})
      this.setState({
        user: Object.assign(this.state.user, Store.userData)
      })
    }
  }
  componentAlreadyRendered (userName) {
    return Object
              .values(this.state.user)
              .filter(user => user === userName)
              .length
  }

  renderPanel (key) {
    return (
      <ChatPannel key={key} index={key} details={{ key: key, userName: this.state.user[key] }} />
    )
  }
  render () {
    return (
      <div className='sideBar'>
        <ChatSideBar func_renderChatPanel={this.renderChatPanel} />
        <div className='pannelMain'>
        {Object.keys(this.state.user).map(this.renderPanel)}
        </div>
        <style jsx>{`
          .pannelMain {
            display:flex;

          }
          .sideBar {
            display: flex;
            flex-direction: row-reverse;
          }
        `}</style>
      </div>
    )
  }
}

export default ChatComponent
