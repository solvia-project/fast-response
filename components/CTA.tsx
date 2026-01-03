'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="glass rounded-3xl p-12 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Standardize Your APIs?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join developers who are building better APIs with Solvia Response.
                            Start for free, no credit card required.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://github.com/solvia-project/response-framework"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-5 h-5" />
                                Get Started Free
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>

                            <motion.a
                                href="#pricing"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Pricing
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
