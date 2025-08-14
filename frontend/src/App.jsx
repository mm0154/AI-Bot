import React, { useState } from 'react';
import './App.css';
import UserList from './UserList';
import ChatWindow from './ChatWindow';

const App = () => {
  const [users] = useState([
    { id: 4, name: 'AI Bot', online: true },
    { id: 1, name: 'Alice', online: true },
    { id: 2, name: 'Bob', online: true },
    { id: 3, name: 'Charlie', online: true },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={styles.container}>
      <UserList users={users} onSelect={setSelectedUser} />
      {selectedUser && <ChatWindow user={selectedUser} />}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'left',
    height: '80vh',
    overflow: 'hidden', 
    fontFamily: 'Arial, sans-serif',
  },
};


export default App;