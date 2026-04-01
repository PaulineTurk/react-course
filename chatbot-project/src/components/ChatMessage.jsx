import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'

export function ChatMessage({ message, sender }) {
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