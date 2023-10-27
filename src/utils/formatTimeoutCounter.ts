export function formatTimeoutCounter(timeoutSeconds: number) {
  const minutes = Math.floor(timeoutSeconds / 60);
  const seconds = timeoutSeconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}
