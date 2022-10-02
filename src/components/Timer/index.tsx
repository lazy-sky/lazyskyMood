import { useSetRecoilState } from 'recoil'

import { isTimerExpiredState } from 'store/atom'
import { useTimer } from 'hooks'
import { useEffect } from 'react'
import { ArrowDownIcon, ArrowUpIcon, PauseIcon, PlayIcon, ResetIcon } from 'assets/svgs'

import style from './timer.module.scss'

interface ITimerProps {
  expiryTimestamp: number | Date
  onExpire: () => void
}

const Timer = ({ expiryTimestamp, onExpire }: ITimerProps) => {
  const { seconds, minutes, hours, isRunning, setSeconds, start, pause, clearTimer } = useTimer({
    expiryTimestamp,
    onExpire,
  })
  const setIsTimerExpired = useSetRecoilState(isTimerExpiredState)

  useEffect(() => {}, [])

  const handleStartClick = () => {
    start()
    setIsTimerExpired(false)
  }

  const handleSecondsUpClick = () => {
    pause()
    setSeconds((prev) => prev + 10)
  }

  const handleSecondsDownClick = () => {
    if (seconds < 10) return

    pause()
    setSeconds((prev) => prev - 10)
  }

  const handleMinutesUpClick = () => {
    pause()
    setSeconds((prev) => prev + 60)
  }

  const handleMinutesDownClick = () => {
    if (minutes < 1) return

    pause()
    setSeconds((prev) => prev - 60)
  }

  const handleHoursUpClick = () => {
    pause()
    setSeconds((prev) => prev + 3600)
  }

  const handleHoursDownClick = () => {
    if (hours < 1) return

    pause()
    setSeconds((prev) => prev - 3600)
  }

  return (
    <div className={style.timer}>
      <div className={style.times}>
        <div>
          <button type='button' onClick={handleHoursUpClick}>
            <ArrowUpIcon />
          </button>
          <span> {hours >= 10 ? hours : `0${hours}`} </span>
          <button type='button' onClick={handleHoursDownClick}>
            <ArrowDownIcon />
          </button>
        </div>
        <div>:</div>
        <div>
          <button type='button' onClick={handleMinutesUpClick}>
            <ArrowUpIcon />
          </button>
          <span> {minutes >= 10 ? minutes : `0${minutes}`} </span>
          <button type='button' onClick={handleMinutesDownClick}>
            <ArrowDownIcon />
          </button>
        </div>
        <div>:</div>

        <div>
          <button type='button' onClick={handleSecondsUpClick}>
            <ArrowUpIcon />
          </button>
          <span> {seconds >= 10 ? seconds : `0${seconds}`} </span>
          <button type='button' onClick={handleSecondsDownClick}>
            <ArrowDownIcon />
          </button>
        </div>
      </div>

      <div className={style.timerControl}>
        {isRunning ? (
          <button type='button' onClick={pause}>
            <PauseIcon />
          </button>
        ) : (
          <button type='button' onClick={handleStartClick}>
            <PlayIcon />
          </button>
        )}
        <button type='button' onClick={clearTimer}>
          <ResetIcon />
        </button>
      </div>
    </div>
  )
}

export default Timer
