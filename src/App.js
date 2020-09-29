import React from 'react'
import { Home, About, Register } from './pages'
import { Route } from 'react-router-dom'
import { Header } from './components'

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/about" component={About} exact />
    </div>
  )
}

export default App
