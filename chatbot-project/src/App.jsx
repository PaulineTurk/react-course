import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import RobotImage from './assets/robot.png'
import UserImage from './assets/user.png'
import './App.css'

function ChatMessage({ message, sender }) {
  return (
    <div className={sender == "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" &&
        <img className="chat-message-profile"
          src={RobotImage}
        />
      }
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" &&
        <img className="chat-message-profile"
          src={UserImage}
        />
      }
    </div>
  )
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const element = chatMessagesRef.current
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [chatMessages])

  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              key={chatMessage.id}
              message={chatMessage.message}
              sender={chatMessage.sender}
            />
          )
        })
      }
    </div>
  )
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      message: "Hello chatbot",
      sender: "user"
    },
    {
      id: "2",
      message: "Hello! How can I help you?",
      sender: "robot"
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
