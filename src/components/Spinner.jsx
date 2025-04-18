import { motion } from 'framer-motion';
import '../index.css';

const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto"
    ></motion.div>
  );
};

export default Spinner;
