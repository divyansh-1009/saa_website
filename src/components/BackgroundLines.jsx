// components/Background.jsx
import { motion } from "motion/react"

const Background = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            {/* Layer 1: The precise hero glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100/40 via-transparent to-purple-100/20 dark:bg-hero-glow z-0"></div>
            
            {/* Layer 2: The repeating stardust texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100/30 to-blue-50/20 dark:bg-stardust opacity-30 dark:opacity-20 z-0"></div>
            
            {/* Layer 3: The animated lines from the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-1/2 flex justify-around">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="relative w-px h-full bg-gradient-to-t from-gray-300/20 dark:from-white/5 to-transparent">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[30%] bg-blue-400/60 dark:bg-indigo-700"
                            style={{ 
                                boxShadow: '0 0 8px var(--glow-color)', 
                                filter: 'blur(1px)' 
                            }}
                            initial={{ y: '70vh' }}
                            animate={{ y: ['-30vh', '70vh'] }}
                            transition={{ 
                                duration: 10 + i * 2, 
                                repeat: Infinity, 
                                repeatType: 'loop',
                                ease: 'linear',
                                delay: i * 1.5
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Background;


// // components/Background.jsx
// import { motion } from 'framer-motion';

// const Background = () => {
//     return (
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
//             {/* Layer 1: The precise hero glow */}
//             <div className="absolute top-0 left-0 w-full h-full bg-hero-glow z-0"></div>
            
//             {/* Layer 2: The repeating stardust texture */}
//             <div className="absolute top-0 left-0 w-full h-full bg-stardust opacity-20 z-0"></div>
            
//             {/* Layer 3: The animated lines from the bottom */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-1/2 flex justify-around">
//                 {[...Array(7)].map((_, i) => (
//                     <div key={i} className="relative w-px h-full bg-gradient-to-t from-white/5 to-transparent">
//                         <motion.div 
//                             className="absolute top-0 left-0 w-full h-[30%] bg-indigo-700"
//                             style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', filter: 'blur(1px)' }}
//                             initial={{ y: '70vh' }}
//                             animate={{ y: ['-30vh', '70vh'] }}
//                             transition={{ 
//                                 duration: 10 + i * 2, 
//                                 repeat: Infinity, 
//                                 repeatType: 'loop',
//                                 ease: 'linear',
//                                 delay: i * 1.5
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Background;