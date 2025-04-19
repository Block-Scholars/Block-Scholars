import React from "react";
import { motion } from "framer-motion";

export function MissionPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-gray-800">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Our Full Mission</h1>
        <p className="mb-4">
          Block Scholars was founded with the belief that blockchain education should start early. Our mission is to build an inclusive student-led community where curious minds can explore the future of decentralized tech.
        </p>
        <p className="mb-4">
          We organize workshops, panels, project showcases, and peer mentorship across NYC high schools. Students can dive into Web3 topics, from NFTs and DAOs to smart contracts and Layer 2 scaling.
        </p>
        <p>
          By building together, we’re empowering the next generation of developers, founders, and innovators—starting now.
        </p>
      </motion.div>
    </section>
  );
}

export function StoryPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">The Full Story</h1>
        <p className="mb-4">
          It all started when Max and Zachary, two high school students passionate about crypto, realized there were no clubs or communities where teens could explore blockchain seriously.
        </p>
        <p className="mb-4">
          What began as a casual idea turned into a full-blown initiative. They reached out to classmates, teachers, and tech mentors to build something bigger than their own school—a cross-campus community with real impact.
        </p>
        <p>
          Today, Block Scholars connects students across the city who are eager to innovate, share, and lead the charge into Web3.
        </p>
      </motion.div>
    </section>
  );
}