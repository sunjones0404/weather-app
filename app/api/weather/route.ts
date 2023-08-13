import { WeatherResponse } from '@/types/weather.type'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest
): Promise<NextResponse<WeatherResponse>> => {
  const url = new URL(request.url)
  const location = url.searchParams.get('location')

  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&aqi=no&days=5`
  )

  if (res.status !== 200) {
    const { error } = await res.json()
    return NextResponse.json({ data: null, isError: true, error })
  }

  const data = await res.json()
  return NextResponse.json({ data, isError: false, error: null })
}
