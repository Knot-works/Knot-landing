import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './TextGenerate.module.css'

interface TextGenerateProps {
  text: string
  className?: string
  delay?: number
}

export function TextGenerate({ text, className = '', delay = 0 }: TextGenerateProps) {
  const { ref, isVisible } = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  const words = text.split(' ')

  return (
    <p ref={ref} className={`${styles.container} ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={`${styles.char} ${shouldAnimate ? styles.visible : ''}`}
              style={{
                transitionDelay: `${wordIndex * 60 + charIndex * 25}ms`,
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className={styles.space}>&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  )
}
