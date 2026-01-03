'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AutoResponseShowcase from '@/components/AutoResponseShowcase'
import CodeShowcase from '@/components/CodeShowcase'
import Frameworks from '@/components/Frameworks'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden">
            <Hero />
            <Features />
            <AutoResponseShowcase />
            <CodeShowcase />
            <Frameworks />
            <Pricing />
            <CTA />
            <Footer />
        </main>
    )
}
