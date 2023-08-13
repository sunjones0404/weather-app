'use client'

import { useMemo } from 'react'
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

  return (
    <motion.header
      initial={false}
      animate={{
        y: 0,
        height: locationDisplayed ? '5rem' : '100vh',
        transition: {
          duration: 0.3,
          ease: 'easeInOut'
        }
      }}
      className={[
        styles.header,
        locationDisplayed ? styles['header--reduced'] : ''
      ].join(' ')}
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
