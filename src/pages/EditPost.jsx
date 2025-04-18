import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import Spinner from '../components/Spinner'; 

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const foundPost = storedPosts.find(p => p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/');
    }
    
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = storedPosts.map(p => 
      p.id === id ? { ...p, ...formData } : p
    );
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Edit Post</h1>
      <BlogForm 
        onSubmit={handleSubmit} 
        initialData={post} 
        buttonText="Update Post" 
      />
    </div>
  );
};

export default EditPost;