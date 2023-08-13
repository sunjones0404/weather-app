'use client'

import { useEffect, useMemo, useRef } from 'react'
import styles from './header.module.scss'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaSistrix } from 'react-icons/fa'

type SearchFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    search: {
      value: string
    }
  }
}

export const Header = () => {
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const locationDisplayed = useMemo(() => {
    return pathname.includes('location')
  }, [pathname])

  const handleSubmit = (event: SearchFormEvent) => {
    event.preventDefault()

    const {
      search: { value }
    } = event.target

    if (!value) return

    router.push(`/location/${value}`)
  }

  const handleFocus = () => {
    if (ref.current) {
      ref.current.value = ''
      ref.current.focus()
    }
  }

  useEffect(() => {
    if (locationDisplayed) return

    handleFocus()
  }, [locationDisplayed])

  return (
    <motion.header
      initial={false}
      animate={{
        y: 0,
        height: locationDisplayed ? '5rem' : '100vh',
        transition: {
          duration: 0.2,
          ease: 'easeInOut'
        }
      }}
      className={styles.header}
    >
      <form onSubmit={handleSubmit}>
        <label
          className={styles.label}
          htmlFor='search'
          style={{
            display: locationDisplayed ? 'none' : 'block'
          }}
        >
          Search weather by location
        </label>
        <div className={styles.search}>
          <input
            ref={ref}
            name='search'
            type='search'
            placeholder='Enter a town or city'
          />
          <button type='submit' aria-label='Submit search'>
            <FaSistrix />
          </button>
        </div>
      </form>
    </motion.header>
  )
}
