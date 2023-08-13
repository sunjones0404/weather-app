import styles from './summary.module.scss'
import Image from 'next/image'
import { SummaryProps } from './summary.type'

export const Summary = ({ data }: SummaryProps) => {
  return (
    <>
      <h1 className={styles.title}>{data?.location.name}</h1>
      <h2 className={styles.subtitle}>
        {data?.location.region}, {data?.location.country}
      </h2>
      <div className={styles.summary}>
        <h3 className={styles.temperature}>{data?.current.temp_c}°C</h3>
        <Image
          className={styles.icon}
          src={`https:${data?.current.condition.icon}`}
          width={80}
          height={80}
          alt={data?.current.condition.text ?? 'Weather icon'}
        />
      </div>
    </>
  )
}
