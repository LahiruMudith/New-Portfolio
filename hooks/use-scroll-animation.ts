"use client"

import { useEffect, useRef, useState } from "react"

// Generic version - defaults to HTMLElement if no type specified
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
    const ref = useRef<T | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold },
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold])

    return { ref, isVisible }
}