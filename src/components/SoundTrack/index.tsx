import { useEffect, useMemo, useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useMount } from 'react-use'
import cx from 'classnames'

import { isTimerExpiredState } from 'store/atom'
import VolumeSlider from 'components/VolumeSlider'
import { PauseIcon, PlayIcon, AudioDefaultIcon, MuteIcon } from 'assets/svgs'

import style from './soundTrack.module.scss'

interface ISoundProps {
  sound: HTMLAudioElement
  icon?: React.ReactElement
  title: string
}

const SoundTrack = ({ sound, icon = <AudioDefaultIcon />, title }: ISoundProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const isTimerExpired = useRecoilValue(isTimerExpiredState)

  useMount(() => {
    sound.loop = true
  })

  useEffect(() => {
    sound.volume = volume / 100
  }, [sound, volume])

  useEffect(() => {
    if (isTimerExpired) {
      sound.pause()
      sound.currentTime = 0
      setIsPlaying(false)
    }
  }, [isTimerExpired, sound])

  const handleStartClick = useCallback(() => {
    sound.play()
    setIsPlaying((prev) => !prev)
  }, [sound])

  const handlePauseClick = useCallback(() => {
    sound.pause()
    setIsPlaying((prev) => !prev)
  }, [sound])

  const handleVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setVolume(Number(e.target.value))
  }

  const handleMuteClick = () => {
    setVolume(0)
  }

  const PlayToggleButton = useMemo(() => {
    if (isPlaying) {
      return (
        <button type='button' onClick={handlePauseClick}>
          <PauseIcon />
        </button>
      )
    }

    return (
      <button type='button' onClick={handleStartClick}>
        <PlayIcon />
      </button>
    )
  }, [handlePauseClick, handleStartClick, isPlaying])

  return (
    <div className={style.soundTrack}>
      <div className={style.header}>
        <div className={cx(style.title, isPlaying && style.active)}>
          {/* {icon}
          {title} */}
          <span className={style.icon}>{icon}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className={style.soundControl}>
        {PlayToggleButton}
        <VolumeSlider value={volume} onChange={handleVolumeChange} />
        <button type='button' onClick={handleMuteClick}>
          <MuteIcon />
        </button>
      </div>
    </div>
  )
}

export default SoundTrack
