"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const initialOrder = [
    "#4a6bff", // Electric Blue
    "#6c5ce7", // Neon Purple
    "#00cec9", // Cyan
    "#ff7675", // Coral
]

export default function LandingPage() {
    const [order, setOrder] = useState(initialOrder)
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle([...order])), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6 overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[90px] opacity-15 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500 rounded-full filter blur-[70px] opacity-20 animate-pulse"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl text-center">
                {/* Animated Logo */}
                <div className="relative mb-8">
                    <ul className="list-none p-0 m-0 relative flex flex-wrap gap-3 w-[300px] justify-center items-center">
                        {order.map((backgroundColor) => (
                            <motion.li
                                key={backgroundColor}
                                layout
                                transition={spring}
                                className="w-[100px] h-[100px] rounded-xl shadow-lg"
                                style={{ backgroundColor }}
                            />
                        ))}
                    </ul>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <span className="text-6xl font-bold text-white drop-shadow-xl">✓</span>
                    </motion.div>
                </div>
                {/* bg-gradient-to-r from cyan-500 to-purple-400 */}
                
                {/* Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 to-yellow-300 mb-6"
                >
                    TaskFlow
                </motion.h1>
                
                {/* Tagline */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-xl text-white/80 mb-12 max-w-md"
                >
                    Effortless task management with elegant simplicity
                </motion.p>
                
                
                {/* <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(104, 211, 245, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/todo')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                    <span className="relative z-10">Get Started</span>
                    <motion.span 
                        className="absolute inset-0 bg-white opacity-0 hover:opacity-10"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button> */}


                {/* Get Started Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(104, 211, 245, 0.7)",
                                background: "linear-gradient(to right, #00d2ff, #3a7bd5)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/todo')}
                            className="relative overflow-hidden group"
                            style={{
                                padding: '1.25rem 3rem',
                                margin: '2rem 0 0 0',
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                borderRadius: '9999px',
                                color: 'white',
                                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0, 114, 255, 0.4)',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                        >
                            <span className="relative z-20 flex items-center justify-center gap-2">
                                Get Started
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            
                            {/* Animated background elements */}
                            <motion.span 
                                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                                initial={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            {/* Glow effect */}
                            <motion.span 
                                className="absolute -inset-1 blur-md opacity-0 group-hover:opacity-70"
                                style={{
                                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                    transition: 'opacity 0.4s ease'
                                }}
                            />
                        </motion.button>
            </div>
        </div>
    )
}

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

function shuffle(array) {
    const newArray = [...array]
    return newArray.sort(() => Math.random() - 0.5)
}