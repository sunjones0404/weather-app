import styles from './page.module.scss'
import { LocationPageProps } from '@/types/location.type'
import { getWeather } from '../../api/route'

export default async function Location({
  params: { query }
}: LocationPageProps) {
  const response = await getWeather(query)

  if (response.error) return <div>{response.error.message}</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {response.data?.location.name}, {response.data?.location.region}
      </h1>
      <h2 className={styles.subtitle}>{response.data?.location.country}</h2>
    </div>
  )
}
