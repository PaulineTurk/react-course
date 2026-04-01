import { useState } from "react"
import "./LoginForm.css"

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    function switchPasswordVisibility() {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className="user-container">
                <input
                    className="user-input"
                    id="email"
                    placeholder="Email"
                />
                <div>
                    <div className="password-container">
                        <input
                            className="user-input"
                            id="password"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                        />
                        <button onClick={switchPasswordVisibility}>
                            Show
                        </button>
                    </div>
                </div>
            </div>
            <div className="connexion-button-container">
                <button className="connexion-button">
                    Login
                </button>
                <button className="connexion-button">
                    Sign up
                </button>
            </div>
        </>
    )
}