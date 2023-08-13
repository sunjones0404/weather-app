import { ForecastdayEntity } from '@/types/weather.type'

export type HourlyForecastProps = {
  data: ForecastdayEntity[] | null | undefined
}
