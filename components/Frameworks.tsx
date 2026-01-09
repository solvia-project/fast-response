'use client'

import { motion } from 'framer-motion'

const frameworks = [
    { name: 'Express.js', logo: '⚡', color: 'from-gray-600 to-gray-800' },
    { name: 'Fastify', logo: '⚙️', color: 'from-black to-gray-900' },
    { name: 'NestJS', logo: '🦅', color: 'from-red-600 to-pink-600' },
    { name: 'Laravel', logo: '🔺', color: 'from-red-500 to-orange-500' },
    { name: 'FastAPI', logo: '🚀', color: 'from-teal-500 to-green-500' },
    { name: 'Django', logo: '🎸', color: 'from-green-700 to-emerald-700' },
    { name: 'Flask', logo: '⚗️', color: 'from-gray-600 to-gray-800' },
    { name: 'Koa.js', logo: '🌿', color: 'from-gray-700 to-gray-900' },
]

export default function Frameworks() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Works With Your Stack
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Seamless integration with the most popular frameworks across multiple languages
                    </p>
                </motion.div>

                {/* Frameworks grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {frameworks.map((framework, index) => (
                        <motion.div
                            key={framework.name}
                            className="glass p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {framework.logo}
                            </div>
                            <h3 className="font-semibold text-lg">{framework.name}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Coming soon */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <p className="text-gray-400">
                        + More frameworks coming soon (Go, Rust, .NET, Java/Spring Boot)
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
