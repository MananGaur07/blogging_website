import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../index.css';

const BlogCard = ({ post, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex justify-end gap-3">
          <Link
            to={`/edit/${post.id}`}
            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            <FaEdit />
            <span>Edit</span>
          </Link>
          <button
            onClick={() => onDelete(post.id)}
            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-300"
          >
            <FaTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;