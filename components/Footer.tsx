'use client'

import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-gradient">Solvia Response</h3>
                        <p className="text-gray-400 mb-4">
                            Universal JSON response standardization for modern APIs.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/solvia-project/response-framework"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-2 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com/solviaresponse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-2 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:team@solvia.com"
                                className="glass p-2 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="https://github.com/solvia-project/response-framework" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="https://github.com/solvia-project/response-framework/tree/main/examples" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Community</h4>
                        <ul className="space-y-2">
                            <li><a href="https://github.com/solvia-project/response-framework" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://discord.gg/solvia" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                            <li><a href="https://github.com/solvia-project/response-framework/blob/main/CONTRIBUTING.md" className="text-gray-400 hover:text-white transition-colors">Contributing</a></li>
                            <li><a href="https://github.com/solvia-project/response-framework/blob/main/BOUNTY.md" className="text-gray-400 hover:text-white transition-colors">Bounty Program</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2026 Solvia Team. Released under MIT License.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="https://github.com/solvia-project/response-framework/blob/main/LICENSE" className="text-gray-400 hover:text-white transition-colors">License</a>
                        <a href="https://github.com/solvia-project/response-framework/blob/main/CONTRIBUTING.md" className="text-gray-400 hover:text-white transition-colors">Contributing</a>
                        <a href="mailto:team@solvia.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
