// Imports (new keyword to require modules)
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/'

//Render
const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <div className="App">
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById('root')
)

// Export
export default function App() {
  return <div></div>
}
