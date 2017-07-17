import {Component} from 'react'
import Layout from '../components/layout'

class Contact extends Component {

  constructor (props) {
    super (props)
  }
  static async getInitialProps (props) {
      return {}
  }
  render () {
    return (
      <div>
        <Layout />
        <p> In Contact Page </p>
      </div>
    )
  }
}

export default Contact
