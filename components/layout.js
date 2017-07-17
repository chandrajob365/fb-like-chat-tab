import Header from '../components/header'
import ChatComponent from '../components/chatComponent'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '5px solid #fff'
}
const Layout = (props) => (
  <div style={{layoutStyle}}>
    <Header />
    <ChatComponent />
  </div>
)
export default Layout
