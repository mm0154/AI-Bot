import React from 'react';

const UserList = ({ users, onSelect }) => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.heading}>
        <span style={styles.dot}></span>
        Online Users
      </div>
      <ul style={styles.list}>
        {users.filter(u => u.online).map(user => (
          <li key={user.id} style={styles.item} onClick={() => onSelect(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  heading: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'green',
    marginRight: '8px',
  },
  sidebar: {
    
    width: '250px',
    padding: '20px',
    borderRight: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  },
};

export default UserList;