"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({ 
    children, 
    className = "", 
    delay = 0, 
    direction = "up" 
}: AnimatedSectionProps) {
    
    const getInitialProps = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 50 };
            case "down": return { opacity: 0, y: -50 };
            case "left": return { opacity: 0, x: -50 };
            case "right": return { opacity: 0, x: 50 };
            case "none": return { opacity: 0 };
        }
    }

    return (
        <motion.div
            className={className}
            initial={getInitialProps()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    )
}
