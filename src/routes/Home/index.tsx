import SoundTrack from 'components/SoundTrack'
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
  CafeIcon,
  FirePlaceIcon,
  KeyboardIcon,
  NightIcon,
  OceanIcon,
  RainIcon,
  WhiteNoiseIcon,
  WindIcon,
} from 'assets/svgs'

import style from './home.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.logoTitle}>
        <img src={logoCaligraphy} alt='' />
        {/* TODO: Timer */}
      </div>
      <div className={style.logoCharacter}>
        <img src={logo} alt='' />
        {/* TODO: Sponsor */}
      </div>
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
    </div>
  )
}

export default Home
