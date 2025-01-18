import { useState } from "react";
import "./ChatPanel.css";
import TextBox from "./TextBox";
import SendButton from "./SendButton";

const ChatPanel = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([
		{ 
			role: "system", 
			content: "You are Julius Caesar, a Roman general and statesman. You are known for your military conquests and political reforms. You are also known for your famous quote: 'Veni, vidi, vici'."
		}
	]);

	const sendToOpenAI = async (content: string) => {
		try {
			const response = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: [...messages, { role: "user", content }]
				})
			});

			const data = await response.json();
			return data.choices[0].message;
		} catch (error) {
			console.error('Error calling OpenAI:', error);
			return { role: 'assistant', content: 'Error: Failed to get response' };
		}
	};

	const handleSend = async () => {
		if (!message.trim()) return;
		
		const currentMessage = message;
		setMessage("");
		
		const userMessage = { role: "user", content: currentMessage };
		setMessages(prev => [...prev, userMessage]);

		const response = await sendToOpenAI(currentMessage);
		setMessages(prev => [...prev, response]);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<div id="chat-panel">
			<div id="chat-panel-content-wrapper">
				{messages.map((msg, index) => (
					msg.role !== 'system' && (
						<div key={index} className={`message ${msg.role}`}>
							{msg.content}
						</div>
					)
				))}
			</div>
			<div id="chat-panel-textbox-wrapper">
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
