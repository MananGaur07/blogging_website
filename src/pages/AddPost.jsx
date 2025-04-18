import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const AddPost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newPost = {
      id: Date.now().toString(),
      ...formData
    };
    
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Post</h1>
      <BlogForm onSubmit={handleSubmit} buttonText="Add Post" />
    </div>
  );
};

export default AddPost;