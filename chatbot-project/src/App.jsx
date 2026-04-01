import { useState } from 'react'
import { getTime } from "./utils/time"
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      message: "Hello chatbot",
      sender: "user",
      time: getTime()
    },
    {
      id: "2",
      message: "Hello! How can I help you?",
      sender: "robot",
      time: getTime()
    }
  ])
  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}


export default App
