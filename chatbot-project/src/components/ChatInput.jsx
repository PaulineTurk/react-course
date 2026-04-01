
import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('')

    function saveInput(event) {
        setInputText(event.target.value)
    }


    function sendMessage() {
        const response = Chatbot.getResponse(inputText)
        setChatMessages([...chatMessages,
        {
            id: crypto.randomUUID(),
            message: inputText,
            sender: "user",
        },
        {
            id: crypto.randomUUID(),
            message: response,
            sender: "robot",
        }
        ])
        setInputText('')
    }
    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                id="chatbot_input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInput}
                value={inputText}
            >
            </input>
            <button
                className="send-button"
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    )
}
