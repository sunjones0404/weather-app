import Image from 'next/image'
import styles from './daily-forecast.module.scss'
import { DailyForecastProps } from './daily-forecast.type'

export const DailyForecast = ({ data }: DailyForecastProps) => {
  if (!data) return null

  return (
    <>
      <p className={styles['forecast-heading']}>3 Day Forecast</p>
      <div className={styles.forecast}>
        {data?.map((day) => (
          <div key={day.date_epoch} className={styles.day}>
            <h4>
              {new Date(day.date).toLocaleString('en-GB', {
                weekday: 'long'
              })}
            </h4>
            <Image
              src={`https:${day.day.condition.icon}`}
              width={40}
              height={40}
              alt={day.day.condition.text ?? 'Weather icon'}
            />
            <p>
              {day.day.mintemp_c}°C - {day.day.maxtemp_c}°C
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
