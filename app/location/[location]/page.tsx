import styles from './page.module.scss'
import { LocationPageProps } from '@/types/location.type'
import { Summary } from '@/app/components/summary'
import { HourlyForecast } from '@/app/components/hourly-forecast'
import { DailyForecast } from '@/app/components/daily-forecast'
import { Error } from '@/app/components/error'

export default async function Location({
  params: { location }
}: LocationPageProps) {
  const getWeather = async () => {
    const result = await fetch(
      `${process.env.BASE_URL}/api/weather?location=${location}`
    )

    return result.json()
  }

  const weather = await getWeather()

  if (weather.error) {
    return (
      <section className={styles.container}>
        <Error message={weather.error.message} />
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <Summary data={weather.data} />
      <HourlyForecast data={weather.data?.forecast?.forecastday} />
      <DailyForecast data={weather.data?.forecast?.forecastday} />
    </section>
  )
}
