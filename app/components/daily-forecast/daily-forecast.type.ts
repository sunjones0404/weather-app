import { ForecastdayEntity } from '@/types/weather.type'

export type DailyForecastProps = {
  data: ForecastdayEntity[] | null | undefined
}
