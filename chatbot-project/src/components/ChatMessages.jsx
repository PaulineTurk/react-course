import { ChatMessage } from './ChatMessage';
import { useRef, useEffect } from 'react'


export default function ChatMessages({ chatMessages }) {
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
