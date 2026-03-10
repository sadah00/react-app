import React from 'react'

const Header = ({user,text}) => {
  return (
    <div>
      <p>react app</p>
      <p>hello {user.name}</p>
      <p>{text}</p>
    </div>
  )
}

export default Header
