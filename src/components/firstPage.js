import React from 'react'
import {Link} from 'react-router-dom'

const FirstPage = () => {
  return (
    <div>
      First Page




      <Link to='/signup' ><button>Sign up</button></Link>
      <Link to='/login' ><button>Log In</button></Link>
    </div>
  )
}

export default FirstPage
