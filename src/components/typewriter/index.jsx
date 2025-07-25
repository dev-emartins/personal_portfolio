import { useState, useEffect, useRef } from 'react'

const texts = ["Web Designer", "Desenvolvedor", "Engenheiro de Softwares"]
const typingSpeed = 400
const erasingSpeed = 150
const delayAfterTyping = 1500

function Typewriter(){
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const typingRef = useRef(null)

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index]
      const element = typingRef.current

      if (!element) return

      if (!isDeleting && charIndex < currentText.length) {
        element.innerHTML = currentText.substring(0, charIndex + 1)
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        element.innerHTML = currentText.substring(0, charIndex - 1)
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [charIndex, index, isDeleting])

  return (
    <p className="w-auto flex items-center">
      <span className="text-2xl font-black mr-1 text-(--accent)">root@dem:/#</span>
      <span className="text-2xl font-medium" ref={ typingRef }></span>
      <span className="text-2xl font-bold animate-(--animate-blink)">&#x025AE;</span>
    </p>
  )
}

export default Typewriter