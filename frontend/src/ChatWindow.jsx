import React, { useState } from 'react';
import axios from 'axios';
const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if(user.id === 4){
        const res = await axios.post("https://0404b5361f9b.ngrok-free.app/chat", { prompt: input }, {
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": true
        }
        });
        if (input.trim()) {
            setMessages([...messages, { sender: 'You', text: input }, { sender: user.name, text: res.data.response }]);
            setInput('');
        }
    }
  };

  return (
    <div style={styles.chat}>
      <h2>Chat with {user.name}</h2>
      <div style={styles.messages}>
        {messages.map((msg, idx) => (
            <>
          {msg.sender === "You" ? <div key={idx} style={styles.message}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
          :<div key={idx} style={styles.response}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>}
        </>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button style={styles.button} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
const styles = {
    chat: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '70vh',
      boxSizing: 'border-box',
      padding: '20px',
      width:'800px'
    },
    messages: {
      flex: 1,
      overflowY: 'auto',
      padding: '10px',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      marginBottom: '10px',
      textAlign: 'left'
    },
    response: {
        marginBottom: '10px',
        textAlign: 'right'
      },
    inputArea: {
      display: 'flex',
      gap: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
    },
  };


export default ChatWindow;