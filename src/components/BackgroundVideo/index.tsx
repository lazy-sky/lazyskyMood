import StreetVideo from 'assets/videos/street.mp4'
import CafeVideo from 'assets/videos/cafe.mp4'
import SunsetVideo from 'assets/videos/sunset.mp4'

import style from './backgroundVideo.module.scss'

const videos = [StreetVideo, CafeVideo, SunsetVideo]

const BackgroundVideo = () => {
  const random = Math.round(Math.random() * 2)

  return (
    <video autoPlay muted loop className={style.backgroundVideo}>
      <source src={videos[random]} type='video/mp4' id='video' />
    </video>
  )
}

export default BackgroundVideo
