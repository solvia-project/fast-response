'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const manualExample = `import { Response } from '@solvia/response-js';

app.get('/users', async (req, res) => {
  const users = await db.users.findAll();
  const response = Response.success(users, req.path);
  return res.status(response.code).json(response);
});

app.post('/users', async (req, res) => {
  const errors = validate(req.body);
  if (errors) {
    const response = Response.validationError(errors, req.path);
    return res.status(response.code).json(response);
  }
  const user = await db.users.create(req.body);
  const response = Response.created(user, req.path);
  return res.status(response.code).json(response);
});`;

const autoExample = `import { autoResponse, asyncHandler, ValidationError } from '@solvia/response-js';

app.use(autoResponse()); // Enable auto-response

app.get('/users', asyncHandler(async (req, res) => {
  return res.json(await db.users.findAll());
  // Auto: 200 success ✨
}));

app.post('/users', asyncHandler(async (req, res) => {
  const errors = validate(req.body);
  if (errors) throw new ValidationError(errors);
  // Auto: 422 validation error ✨
  
  return res.json(await db.users.create(req.body));
  // Auto: 201 created ✨
}));`;

const responseExample = `{
  "result": "Data berhasil diambil.",
  "detail": "Data successfully fetched.",
  "path": "/api/users",
  "date": "03-01-2026 17:20:00",
  "code": 200,
  "version": "1.0.0",
  "data": [...]
}`;

export default function AutoResponseShowcase() {
    const [mode, setMode] = useState<'manual' | 'auto'>('auto');

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
                        Write Less. Achieve More.
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Choose your style: Manual control or automatic magic
                    </p>

                    {/* Mode Toggle */}
                    <div className="inline-flex glass rounded-full p-1">
                        <button
                            onClick={() => setMode('auto')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${mode === 'auto'
                                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            ⚡ Auto Mode
                        </button>
                        <button
                            onClick={() => setMode('manual')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${mode === 'manual'
                                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            🎯 Manual Mode
                        </button>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Code */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                                <h3 className="font-semibold text-white">
                                    {mode === 'auto' ? '⚡ Auto Mode - Simple!' : '🎯 Manual Mode - Full Control'}
                                </h3>
                                <span className="text-sm text-gray-400">
                                    {mode === 'auto' ? '~50% less code' : 'Traditional approach'}
                                </span>
                            </div>
                            <div className="p-4">
                                <SyntaxHighlighter
                                    language="typescript"
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: 0,
                                        padding: '1rem',
                                        background: 'transparent',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    {mode === 'auto' ? autoExample : manualExample}
                                </SyntaxHighlighter>
                            </div>
                        </div>

                        {/* Benefits */}
                        <motion.div
                            className="mt-6 space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {(mode === 'auto' ? [
                                '✅ 50% less code to write',
                                '✅ Auto error handling',
                                '✅ Auto status code detection',
                                '✅ Still fully type-safe',
                            ] : [
                                '✅ Full control over responses',
                                '✅ Explicit status codes',
                                '✅ Custom messages',
                                '✅ Perfect for complex logic',
                            ]).map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="glass px-4 py-3 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="text-sm">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Response */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/10">
                                <h3 className="font-semibold text-white">Same Consistent Output</h3>
                            </div>
                            <div className="p-4">
                                <SyntaxHighlighter
                                    language="json"
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: 0,
                                        padding: '1rem',
                                        background: 'transparent',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    {responseExample}
                                </SyntaxHighlighter>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <motion.div
                                className="glass p-6 rounded-xl text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                                    2x
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Faster Development</div>
                            </motion.div>
                            <motion.div
                                className="glass p-6 rounded-xl text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                                    100%
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Consistent Format</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
