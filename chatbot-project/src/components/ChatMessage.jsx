import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, time }) {
    return (
        <div className={sender == "user" ? "chat-message-user" : "chat-message-robot"}>
            {sender === "robot" &&
                <img className="chat-message-profile"
                    src={RobotImage}
                />
            }
            <div className="chat-message-container">
                <div className="chat-message-texte">
                    {message}
                </div>
                <div className='chat-message-time'>
                    {time}
                </div>
            </div>

            {sender === "user" &&
                <img className="chat-message-profile"
                    src={UserImage}
                />
            }
        </div>
    )
}