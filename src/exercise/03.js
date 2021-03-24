// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import { useContext } from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function useCount(){
  const context = React.useContext(CountContext)
  if(!context){
    throw new Error("useCount must be wrapped by CountProvider")
  }
  return context
}

function CountProvider(props){
  const [count, setCount] = React.useState(0)

  const value = [count,setCount]

  return (
    <CountContext.Provider value={value} {...props}/>

  )
}

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [,setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <Counter />
        <CountDisplay />
      </CountProvider>
    </div>
  )
}

export default App
