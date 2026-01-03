'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock } from 'lucide-react'

const plans = [
    {
        name: 'Free & Open Source',
        price: '$0',
        description: 'Forever free for everyone',
        features: [
            'All core adapters (Express, Fastify, NestJS, Laravel)',
            'Full TypeScript & PHP type support',
            'Community support on GitHub',
            'Unlimited projects',
            'MIT License - use anywhere',
            'Regular updates & bug fixes',
        ],
        cta: 'Get Started',
        href: 'https://github.com/solvia-project/response-framework',
        popular: true,
        available: true,
    },
    {
        name: 'Team',
        price: '$49',
        period: '/month',
        description: 'Analytics & monitoring features',
        badge: 'Coming Q2 2026',
        features: [
            'Everything in Free',
            'Analytics dashboard (in development)',
            'Error tracking & monitoring',
            'Priority support',
            'Team collaboration tools',
            'Advanced integrations',
        ],
        cta: 'Join Waitlist',
        href: 'mailto:team@solvia.com?subject=Team%20Plan%20Waitlist',
        popular: false,
        available: false,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For organizations with specific needs',
        badge: 'Coming 2026',
        features: [
            'Everything in Team',
            'Self-hosted analytics',
            'SLA guarantees',
            'Custom integrations',
            'Dedicated support engineer',
            'Training & onboarding',
        ],
        cta: 'Contact Us',
        href: 'mailto:team@solvia.com?subject=Enterprise%20Plan%20Inquiry',
        popular: false,
        available: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 relative">
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
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Start free, scale as you grow. No hidden fees.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative glass rounded-2xl p-8 ${plan.popular && plan.available ? 'ring-2 ring-primary-500 scale-105' : ''
                                } ${!plan.available ? 'opacity-90' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: plan.available ? (plan.popular ? 1.05 : 1.02) : 1 }}
                        >
                            {/* Available Now badge */}
                            {plan.popular && plan.available && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-white" />
                                        <span className="text-sm font-semibold">Available Now</span>
                                    </div>
                                </div>
                            )}

                            {/* Coming Soon badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-1 rounded-full flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-semibold">{plan.badge}</span>
                                    </div>
                                </div>
                            )}

                            {/* Plan name */}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`mb-6 ${plan.available ? 'text-gray-400' : 'text-gray-500'}`}>
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <span className={`text-5xl font-bold ${plan.available ? 'text-gradient' : 'text-gray-500'}`}>
                                    {plan.price}
                                </span>
                                {plan.period && <span className="text-gray-400">{plan.period}</span>}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.available ? 'text-primary-400' : 'text-gray-600'
                                            }`} />
                                        <span className={plan.available ? 'text-gray-300' : 'text-gray-500'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <motion.a
                                href={plan.href}
                                target={plan.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel={plan.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${plan.available && plan.popular
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-xl'
                                        : plan.available
                                            ? 'glass border-2 border-white/30 hover:border-white/50'
                                            : 'glass border-2 border-gray-700/30 text-gray-500 cursor-default'
                                    }`}
                                whileHover={{ scale: plan.available ? 1.02 : 1 }}
                                whileTap={{ scale: plan.available ? 0.98 : 1 }}
                            >
                                {plan.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Transparency note */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="glass rounded-xl p-6 max-w-3xl mx-auto border border-white/10">
                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold text-white">💯 100% Open Source.</span> The core framework is and will always be free.
                        </p>
                        <p className="text-sm text-gray-400">
                            Premium features (analytics, monitoring) are currently in development. Join the waitlist to be notified when they launch.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
