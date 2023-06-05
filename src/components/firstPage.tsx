import React from 'react'
import {Link} from 'react-router-dom'

const FirstPage = () => {
  return (
    <div>
      First Page




      <Link to='/signup' ><button>Sign up</button></Link>
      <Link to='/login' ><button>Log In</button></Link>
      <Link to='/api'><button>Api</button></Link>
    </div>
  )
}

export default FirstPage
