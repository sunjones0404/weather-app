import { WeatherResponse } from '@/types/weather.type'

export const getWeather = async (
  location: string
): Promise<WeatherResponse> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&aqi=no`
  )

  if (res.status !== 200) {
    const { error } = await res.json()

    return {
      data: null,
      isError: true,
      error
    }
  }

  const data = await res.json()

  return {
    data,
    isError: false,
    error: null
  }
}
