'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeExamples = {
    typescript: {
        title: 'TypeScript / JavaScript',
        code: `import { Response } from '@solvia/response-js';
import express from 'express';

const app = express();

app.get('/users', async (req, res) => {
  const users = await db.users.findMany();
  const response = Response.success(users, req.path);
  return res.status(response.code).json(response);
});

app.post('/users', async (req, res) => {
  const validation = validateUser(req.body);
  
  if (!validation.valid) {
    const response = Response.validationError(
      validation.errors, 
      req.path
    );
    return res.status(response.code).json(response);
  }
  
  const user = await db.users.create(req.body);
  const response = Response.created(user, req.path);
  return res.status(response.code).json(response);
});`,
    },
    php: {
        title: 'PHP / Laravel',
        code: `use Illuminate\\Support\\Facades\\Response;

Route::get('/users', function () {
    $users = User::all();
    return Response::solvia()->success($users);
});

Route::post('/users', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required|string',
        'email' => 'required|email',
    ]);
    
    if ($validator->fails()) {
        return Response::solvia()->validationError(
            $validator->errors()
        );
    }
    
    $user = User::create($request->all());
    return Response::solvia()->created($user);
});`,
    },
    python: {
        title: 'Python / FastAPI',
        code: `from solvia_response import Response
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/users")
async def get_users():
    users = await db.users.find_many()
    response = Response.success(users, "/api/users")
    return JSONResponse(
        content=response.to_dict(),
        status_code=response.code
    )

@app.post("/users")
async def create_user(user: UserCreate):
    if not validation.is_valid(user):
        response = Response.validation_error(
            errors,
            "/api/users"
        )
        return JSONResponse(
            content=response.to_dict(),
            status_code=response.code
        )
    
    created = await db.users.create(user)
    response = Response.created(created, "/api/users")
    return JSONResponse(
        content=response.to_dict(),
        status_code=response.code
    )`,
    },
}

const responseExample = `{
  "result": "Data berhasil diambil.",
  "detail": "Data successfully fetched.",
  "path": "/api/users",
  "date": "03-01-2026 14:22:00",
  "code": 200,
  "version": "1.0.0",
  "data": {
    "users": [
      { "id": 1, "name": "John Doe", "email": "john@example.com" }
    ]
  }
}`

export default function CodeShowcase() {
    const [activeTab, setActiveTab] = useState<'typescript' | 'php' | 'python'>('typescript')

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
                        Simple. Consistent. Powerful.
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Write once, use everywhere. Same API across all languages with dual language support.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Code input */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            {/* Tabs */}
                            <div className="flex border-b border-white/10">
                                {Object.entries(codeExamples).map(([key, { title }]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key as 'typescript' | 'php' | 'python')}
                                        className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === key
                                            ? 'bg-white/10 text-white border-b-2 border-primary-500'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {title}
                                    </button>
                                ))}
                            </div>

                            {/* Code */}
                            <div className="p-4">
                                <SyntaxHighlighter
                                    language={activeTab === 'typescript' ? 'typescript' : activeTab === 'php' ? 'php' : 'python'}
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: 0,
                                        padding: '1rem',
                                        background: 'transparent',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    {codeExamples[activeTab].code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </motion.div>

                    {/* Response output */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/10">
                                <h3 className="font-semibold text-white">Response Output</h3>
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

                        {/* Benefits */}
                        <motion.div
                            className="mt-6 space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {[
                                '✅ Dual language (Indonesian + English)',
                                '✅ Type-safe with full IDE support',
                                '✅ Automatic HTTP status codes',
                                '✅ Built-in error handling',
                            ].map((benefit, index) => (
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
                </div>
            </div>
        </section>
    )
}
