import Image from 'next/image'
import styles from './hourly-forecast.module.scss'
import { HourlyForecastProps } from './hourly-forecast.type'

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  if (!data) return null

  return (
    <>
      <p className={styles['forecast-heading']}>Hourly Forecast</p>
      <div className={styles.forecast}>
        {data[0]?.hour?.map((hour) => (
          <div key={hour.time_epoch} className={styles.day}>
            <h4>
              {new Date(hour.time).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </h4>
            <Image
              src={`https:${hour.condition.icon}`}
              width={40}
              height={40}
              alt={hour.condition.text ?? 'Weather icon'}
            />
            <p>{hour.temp_c}°C</p>
          </div>
        ))}
      </div>
    </>
  )
}
