import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 3000], [0, -200]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("working");
    

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: Timestamp.now()
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-0 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          src="https://videos.pexels.com/video-files/3129902/3129902-uhd_2560_1440_25fps.mp4"
          className="w-full h-full object-cover opacity-40"
        >
        </video>
      </div>
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl shadow-custom p-8 md:p-12 border border-gray-800/50"
          style={{
            transform: 'perspective(800px) rotateY(-8deg) rotateX(3deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700/50 text-white rounded-lg focus:outline-none transition-none"
                    placeholder="Your name"
                    style={{
                      WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.6) inset',
                      WebkitTextFillColor: 'white'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700/50 text-white rounded-lg focus:outline-none transition-none"
                    placeholder="your@email.com"
                    style={{
                      WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.6) inset',
                      WebkitTextFillColor: 'white'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700/50 text-white rounded-lg focus:outline-none transition-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;