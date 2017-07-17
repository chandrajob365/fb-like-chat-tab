import {Component} from 'react'
import Layout from '../components/layout'

class Index extends Component {
  constructor (props) {
    super (props)
  }
  static async getInitialProps (props) {
      return {}
  }

  render () {
    return (
      <div >
        <Layout />
      </div>
    )
  }
}

export default Index
