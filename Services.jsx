
import React from "react";
import { motion } from "framer-motion";
import { Calculator, FileText, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FileText className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Tax Returns</h3>
            <p className="text-gray-600">
              Comprehensive tax preparation for individuals, including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Federal and state tax returns</li>
              <li>• Tax planning and consultation</li>
              <li>• Deduction optimization</li>
              <li>• Electronic filing</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Calculator className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Taxation</h3>
            <p className="text-gray-600">
              Expert business tax planning and preparation, including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Corporate tax returns</li>
              <li>• Partnership returns</li>
              <li>• Business tax planning</li>
              <li>• Payroll tax services</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tax Consulting</h3>
            <p className="text-gray-600">
              Strategic tax planning and advisory services, including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Tax strategy development</li>
              <li>• IRS problem resolution</li>
              <li>• Estate tax planning</li>
              <li>• International tax consulting</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
