import { useEffect, useMemo, useCallback, useState } from 'react'
import { PauseIcon, PlayIcon, AudioDefaultIcon } from 'assets/svgs'

interface ISoundProps {
  sound: HTMLAudioElement
  icon?: React.ReactElement
}

const SoundTrack = ({ sound, icon = <AudioDefaultIcon /> }: ISoundProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)

  useEffect(() => {
    sound.volume = volume / 100
  }, [sound, volume])

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
    <div>
      {icon}
      <div style={{ display: 'flex', gap: '8px' }}>{PlayToggleButton}</div>
      <div style={{ border: '2px solid blue' }}>
        <input type='range' defaultValue={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  )
}

export default SoundTrack
