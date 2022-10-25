import backgroundImage1 from 'assets/images/background-lp.jpg'
import backgroundImage2 from 'assets/images/background-headphone.jpg'

import style from './background.module.scss'

const Background = () => {
  const imageSrc = [backgroundImage1, backgroundImage2][Math.round(Math.random())]
  // return <img src='https://picsum.photos/800?grayscale' alt='' className={style.background} />
  return <img src={imageSrc} alt='' className={style.background} />
}

export default Background
