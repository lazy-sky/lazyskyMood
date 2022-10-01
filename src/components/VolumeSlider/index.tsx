import style from './volumeSlider.module.scss'

interface IVolumeSliderProps {
  value: number
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const VolumeSlider = ({ value, onChange }: IVolumeSliderProps) => {
  return <input type='range' value={value} onChange={onChange} className={style.volumeSlider} />
}

export default VolumeSlider
