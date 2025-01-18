import { useState } from "react";
import "./ChatPanel.css";
import TextBox from "./TextBox";
import SendButton from "./SendButton";

const ChatPanel = () => {
	const [message, setMessage] = useState("");
	const [displayText, setDisplayText] = useState("");

	const handleSend = () => {
		setDisplayText(message);
		setMessage("");
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<div id="chat-panel">
			<div>{displayText}</div>
			<div className="input-container">
				<TextBox 
					value={message} 
					onChange={setMessage} 
					onKeyDown={handleKeyPress}
				/>
				<SendButton onClick={handleSend} />
			</div>
		</div>
	);
};

export default ChatPanel;
