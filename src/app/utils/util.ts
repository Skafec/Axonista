import { environment } from 'src/environments/environment';

export function generateCurrentWeatherApiUrl(
  latitude: number,
  longitude: number
): string {
  // TODO: Don't commit this and add to GIT history, move the token! change units metric to be selected by user
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${environment.apiKey}&units=metric`;
}
