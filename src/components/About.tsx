import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar } from 'lucide-react';
import { aboutMe } from '../constants';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-2/5"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background shape */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="https://i.ibb.co/gZkmmH5z/DSC-8332-2.png"
                  alt={aboutMe.name}
                  className="w-[400px] h-[400px] object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl border-4 border-blue-100 dark:border-blue-900"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Years of<br />Experience</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              {aboutMe.name}
            </motion.h3>
            <motion.h4 
              className="text-xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
              variants={itemVariants}
            >
              {aboutMe.title}
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              variants={itemVariants}
            >
              {aboutMe.description}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-500 dark:text-gray-400">Location</h5>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.location}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-500 dark:text-gray-400">Email</h5>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.email}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <Calendar size={18} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-500 dark:text-gray-400">Availability</h5>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.availability}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;