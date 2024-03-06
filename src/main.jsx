import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>Custom App !</div>
  )
}

const ReactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target: '_blank'
  },
  children:'Click me visit Google'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'> Visit google</a>
)

const reactElement=React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
