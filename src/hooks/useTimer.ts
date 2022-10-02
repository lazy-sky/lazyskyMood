import { useState } from 'react'
import { useInterval } from 'react-use'

import { Time, Validate } from 'utils'

const DEFAULT_DELAY = 1000
function getDelayFromExpiryTimestamp(expiryTimestamp: number | Date) {
  if (!Validate.expiryTimestamp(expiryTimestamp)) return null

  const seconds = Time.getSecondsFromExpiry(expiryTimestamp)
  const extraMilliSeconds = Math.floor((seconds - Math.floor(seconds)) * 1000)
  return extraMilliSeconds > 0 ? extraMilliSeconds : DEFAULT_DELAY
}

interface IUseTimer {
  expiryTimestamp: number | Date
  onExpire: () => void
}

export default function useTimer({ expiryTimestamp, onExpire }: IUseTimer) {
  const [timestamp, setExpiryTimestamp] = useState(expiryTimestamp)
  const [seconds, setSeconds] = useState(Time.getSecondsFromExpiry(timestamp))
  const [isRunning, setIsRunning] = useState(false)
  const [delay, setDelay] = useState(getDelayFromExpiryTimestamp(timestamp))

  function handleExpire() {
    Validate.onExpire(onExpire) && onExpire()
    setIsRunning(false)
    setDelay(null)
  }

  function pause() {
    setIsRunning(false)
  }

  function restart(newExpiryTimestamp: number | Date) {
    setDelay(getDelayFromExpiryTimestamp(newExpiryTimestamp))
    setIsRunning(true)
    setExpiryTimestamp(newExpiryTimestamp)
    setSeconds(Time.getSecondsFromExpiry(newExpiryTimestamp))
  }

  function start() {
    const time = new Date()
    time.setMilliseconds(time.getMilliseconds() + seconds * 1000)
    restart(time)
  }

  function clearTimer() {
    pause()
    setSeconds(0)
  }

  useInterval(
    () => {
      if (delay !== DEFAULT_DELAY) {
        setDelay(DEFAULT_DELAY)
      }
      const secondsValue = Time.getSecondsFromExpiry(timestamp)
      setSeconds(secondsValue)
      if (secondsValue <= 0) {
        handleExpire()
      }
    },
    isRunning ? delay : null
  )

  return {
    ...Time.getTimeFromSeconds(seconds),
    start,
    pause,
    restart,
    clearTimer,
    isRunning,
    setSeconds,
  }
}
