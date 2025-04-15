
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <header className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-blue-900 mb-6">
              Professional Tax Services You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert tax preparation and planning for individuals and businesses
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img  alt="Professional tax consultation" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
          </motion.div>
        </div>
      </header>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50 transform -skew-y-6"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img  alt="Expert tax team" className="w-full h-48 object-cover rounded-t-lg mb-6" src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our certified tax professionals have years of experience
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img  alt="Personalized service" className="w-full h-48 object-cover rounded-t-lg mb-6" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored solutions for your unique tax situation
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img  alt="Fast service" className="w-full h-48 object-cover rounded-t-lg mb-6" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" />
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick and efficient tax preparation services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  alt="Tax planning session" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Expert Tax Planning & Preparation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of certified professionals ensures that you receive maximum returns
              while staying compliant with all tax regulations.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
