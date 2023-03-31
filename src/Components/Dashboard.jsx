import React, { useState } from 'react';
function Dashboard() {
  const [post, setPost] = useState('');

  const handlePostClick = () => {
    setPost([...post,{}]);
    console.log('Creating a new post...');
  };

  const handleEditClick = () => {
    console.log('Editing the current post...');
  };

  const handleDeleteClick = (id) => {
    setPost(post.filter(post => post.id !== id))
    console.log('Deleting the current post...');
  };
  return <div className=''></div>;
}

export default Dashboard;
