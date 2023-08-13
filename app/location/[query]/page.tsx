import styles from './page.module.scss'
import { LocationPageProps } from '@/types/location.type'
import { getWeather } from '../../api/route'
import { Summary } from '@/app/components/summary'
import { HourlyForecast } from '@/app/components/hourly-forecast'
import { DailyForecast } from '@/app/components/daily-forecast'
import { Error } from '@/app/components/error'

export default async function Location({
  params: { query }
}: LocationPageProps) {
  const response = await getWeather(query)

  if (response.error) {
    return (
      <section className={styles.container}>
        <Error message={response.error.message} />
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <Summary data={response.data} />
      <HourlyForecast data={response.data?.forecast?.forecastday} />
      <DailyForecast data={response.data?.forecast?.forecastday} />
    </section>
  )
}
