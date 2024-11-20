import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null); // Create a ref for the end of the chat

  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "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";

  const appendMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text: message }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    const userInput = input.trim();
    setInput("");
    appendMessage("user", userInput);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: userInput },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error?.message || `HTTP error! status: ${response.status}`
        );
      }

      const botMessage = data.choices[0]?.message?.content;
      if (botMessage) {
        appendMessage("bot", botMessage);
      } else {
        throw new Error("No response content");
      }
    } catch (error) {
      console.error("Error:", error);
      appendMessage(
        "bot",
        `Error: ${error.message || "Something went wrong. Please try again."}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <Navbar />
      <div className="forbg">
        <div className="chat-header">
          <h1>Chat with Us</h1>
        </div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${
                msg.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && <div className="message bot-message">Thinking...</div>}
          <div ref={messagesEndRef} /> {/* Ref to the bottom of the chat */}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button onClick={sendMessage} disabled={isLoading}>
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBot;
