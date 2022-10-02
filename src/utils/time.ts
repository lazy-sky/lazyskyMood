export default class Time {
  static getTimeFromSeconds(secs: number) {
    const totalSeconds = Math.ceil(secs)
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const seconds = Math.floor(totalSeconds % 60)

    return {
      seconds,
      minutes,
      hours,
    }
  }

  static getSecondsFromExpiry(expiry: number | Date, shouldRound?: boolean) {
    const now = new Date().getTime()
    const milliSecondsDistance = Number(expiry) - now
    if (milliSecondsDistance > 0) {
      const val = milliSecondsDistance / 1000
      return shouldRound ? Math.round(val) : val
    }
    return 0
  }
}
