import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import Spinner from '../components/Spinner';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      setPosts(storedPosts);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
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
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        {posts.length > 0 ? 'Latest Posts' : 'No Posts Yet'}
      </motion.h1>
      
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            onDelete={handleDelete}
            custom={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;