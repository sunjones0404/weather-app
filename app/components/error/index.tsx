'use client'

import styles from './error.module.scss'
import { ErrorProps } from './error.type'
import { useRouter } from 'next/navigation'

export const Error = ({ message }: ErrorProps) => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }

  return (
    <>
      <h1 className={styles.title}>Oops!</h1>
      <h2 className={styles.subtitle}>{message}</h2>
      <button onClick={handleRedirect} className={styles.button}>
        Try another search
      </button>
    </>
  )
}
