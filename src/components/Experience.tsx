import React from 'react';
import { motion } from 'framer-motion';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { timelineExperience } from '../constants';

const Experience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase size={24} />;
      case 'GraduationCap':
        return <GraduationCap size={24} />;
      case 'Code':
        return <Code size={24} />;
      default:
        return <Briefcase size={24} />;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career path and expertise.
          </p>
        </motion.div>

        <VerticalTimeline lineColor="rgb(59 130 246 / 0.5)">
          {timelineExperience.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: 'var(--background-color)', 
                color: 'var(--text-color)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}
              contentArrowStyle={{ borderRight: '10px solid var(--border-color)' }}
              date={experience.date}
              dateClassName="text-gray-600 dark:text-gray-300 font-medium"
              iconStyle={{ 
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)' 
              }}
              icon={getIcon(experience.icon)}
              iconClassName="flex justify-center items-center"
            >
              <div>
                <h3 className="vertical-timeline-element-title text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mt-1 text-blue-600 dark:text-blue-400 font-medium">
                  {experience.location}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;