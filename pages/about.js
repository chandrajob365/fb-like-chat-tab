import {Component} from 'react'
import Layout from '../components/layout'

class About extends Component {

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
        <p> In About Page </p>
      </div>
    )
  }
}

export default About
