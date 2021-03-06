import { environment } from 'src/environments/environment';

export function generateCurrentWeatherApiUrl(
  latitude: number,
  longitude: number
): string {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${environment.apiKey}&units=metric`;
}

export function generateCurrentWeatherForSelectedApiUrl(
  location: string
): string {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.apiKey}&units=metric`;
}
