
import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            About Us
          </h1>
          <img  alt="Tax Pro Services Team" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-8" src="https://images.unsplash.com/photo-1516803166782-f9699a71227f" />
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 mb-6">
            Tax Pro Services has been providing expert tax preparation and consulting
            services for over 20 years. Our team of certified professionals is
            dedicated to helping individuals and businesses navigate the complex
            world of taxation.
          </p>
          <p className="text-lg text-gray-600">
            We pride ourselves on staying current with tax laws and regulations
            while providing personalized service to each client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <img  alt="Our mission in action" className="w-full h-48 object-cover rounded-t-lg mb-6" src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6" />
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional tax services while ensuring maximum benefits
              for our clients through professional expertise and personalized
              attention.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <img  alt="Our values representation" className="w-full h-48 object-cover rounded-t-lg mb-6" src="https://images.unsplash.com/photo-1516803166782-f9699a71227f" />
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, professionalism, and commitment to excellence are the
              cornerstones of our practice. We believe in building long-term
              relationships with our clients.
            </p>
          </motion.div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
                <p className="text-gray-600">
                  Decades of experience in tax preparation and consulting
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Certified professionals with extensive knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
