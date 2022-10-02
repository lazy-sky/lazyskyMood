/* eslint-disable jsx-a11y/media-has-caption */
import { useSetRecoilState } from 'recoil'

import { isTimerExpiredState } from 'store/atom'
import SoundTrack from 'components/SoundTrack'
import Timer from 'components/Timer'
import {
  birdsSound,
  cafeSound,
  fireplaceSound,
  keyboardSound,
  nightSound,
  oceanSound,
  rainSound,
  whiteNoiseSound,
  windSound,
} from 'assets/sounds'
import logo from 'assets/images/logo-character.png'
import logoCaligraphy from 'assets/images/logo-caligraphy.png'
import {
  BirdIcon,
  BlogIcon,
  CafeIcon,
  FirePlaceIcon,
  KeyboardIcon,
  NightIcon,
  OceanIcon,
  RainIcon,
  WhiteNoiseIcon,
  WindIcon,
  YoutubeIcon,
} from 'assets/svgs'

import style from './home.module.scss'
import BackgroundVideo from 'components/BackgroundVideo'

const Home = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 300)
  const setIsTimerExpired = useSetRecoilState(isTimerExpiredState)

  const handleTimerExpire = () => {
    setIsTimerExpired(true)
  }

  return (
    <div style={{ display: 'relative' }}>
      <div className={style.home}>
        <div className={style.logoTitle}>
          <img src={logoCaligraphy} alt='' />
        </div>
        <div className={style.logoCharacter}>
          <Timer expiryTimestamp={time} onExpire={handleTimerExpire} />
        </div>
        <div>
          <div className={style.soundContainer}>
            <SoundTrack sound={new Audio(oceanSound)} icon={<OceanIcon />} title='Ocean' />
            <SoundTrack sound={new Audio(rainSound)} icon={<RainIcon />} title='Rainy Day' />
            <SoundTrack sound={new Audio(windSound)} icon={<WindIcon />} title='Wind' />
            <SoundTrack sound={new Audio(birdsSound)} icon={<BirdIcon />} title='Birds' />
            <SoundTrack sound={new Audio(keyboardSound)} icon={<KeyboardIcon />} title='Keyboard' />
            <SoundTrack sound={new Audio(fireplaceSound)} icon={<FirePlaceIcon />} title='Fireplace' />
            <SoundTrack sound={new Audio(nightSound)} icon={<NightIcon />} title='Night' />
            <SoundTrack sound={new Audio(cafeSound)} icon={<CafeIcon />} title='Cafe' />
            <SoundTrack sound={new Audio(whiteNoiseSound)} icon={<WhiteNoiseIcon />} title='White Noise' />
          </div>
          <div className={style.links}>
            <a href='https://github.com/lazy-sky' target='_blank' rel='noreferrer'>
              <img src={logo} alt='' />
            </a>
            <a href='https://www.buymeacoffee.com/lazysky' target='_blank' rel='noreferrer'>
              <img src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg' alt='Buy me a coffee' />
            </a>
            <a href='https://www.youtube.com/channel/UCHORxF_U5dBgipHjMjM91Zw' target='_blank' rel='noreferrer'>
              <YoutubeIcon />
            </a>
            <a href='https://blog-lazysky.vercel.app/' target='_blank' rel='noreferrer'>
              <BlogIcon />
            </a>
          </div>
        </div>
      </div>
      <BackgroundVideo />
    </div>
  )
}

export default Home
