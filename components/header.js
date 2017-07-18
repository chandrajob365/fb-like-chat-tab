import {Component} from 'react'
import Link from 'next/link'

class Header extends Component {
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
