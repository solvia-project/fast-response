'use client'

import { motion } from 'framer-motion'
import { Github, Star, ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm">Open Source • MIT License</span>
                    </motion.div>

                    {/* Main heading */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        <span className="block text-gradient-purple">One Response Format.</span>
                        <span className="block mt-2">Every Framework.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Universal JSON response standardization that works across{' '}
                        <span className="text-primary-400 font-semibold">JavaScript</span>,{' '}
                        <span className="text-accent-400 font-semibold">PHP</span>,{' '}
                        <span className="text-green-400 font-semibold">Python</span>, and{' '}
                        <span className="text-blue-400 font-semibold">Go</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <motion.a
                            href="https://github.com/solvia-project/response-framework"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="#features"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="glass p-4 rounded-lg">
                            <div className="text-3xl font-bold text-gradient">4+</div>
                            <div className="text-sm text-gray-400">Languages</div>
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <div className="text-3xl font-bold text-gradient">10+</div>
                            <div className="text-sm text-gray-400">Frameworks</div>
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <div className="text-3xl font-bold text-gradient">0</div>
                            <div className="text-sm text-gray-400">Overhead</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    )
}
