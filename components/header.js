import {Component} from 'react'
import Link from 'next/link'

class Header extends Component {

  constructor (props) {
    super (props)
  }
  static async getInitialProps (props) {
      return {}
  }
  render () {
    return (
      <div>
        <Link href='/about' prefetch>
          <a> About </a>
        </Link>
        <Link href='/contact' prefetch>
          <a> Contact </a>
        </Link>
      </div>
    )
  }
}

export default Header
