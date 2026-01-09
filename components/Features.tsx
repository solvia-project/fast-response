'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Code2, BarChart3, FileCode, Globe, Terminal } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Auto-Response Mode',
        description: 'Just return your data - responses are automatically wrapped! No more manual Response.success() calls.',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        icon: Globe,
        title: 'Universal Compatibility',
        description: 'Works seamlessly with Express, Fastify, NestJS, Laravel, FastAPI, and more.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Shield,
        title: 'Type Safety',
        description: 'Full TypeScript, PHP, and Python type support with IDE auto-completion.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Code2,
        title: 'Dual Language',
        description: 'Every response includes both Indonesian and English messages automatically.',
        color: 'from-indigo-500 to-violet-500',
    },
    {
        icon: BarChart3,
        title: 'Built-in Analytics',
        description: 'Track error patterns and monitor API health with premium features (coming soon).',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: FileCode,
        title: 'Zero Overhead',
        description: 'Lightweight and blazing fast. No performance impact on your applications.',
        color: 'from-red-500 to-rose-500',
    },
    {
        icon: Terminal,
        title: 'CLI Tool',
        description: 'Initialize projects, generate code, and migrate versions with our powerful command-line interface.',
        color: 'from-teal-500 to-cyan-500',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-24 px-4 relative">
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
                        Everything You Need
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Built for developers who care about consistency, type safety, and productivity
                    </p>
                </motion.div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-full h-full text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
