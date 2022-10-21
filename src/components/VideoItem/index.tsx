import { decodeHTMLEntities } from 'utils'
import styles from './videoItem.module.scss'

interface IVideoItemProps {
  video: IYoutubeVideo
  onVideoClick: (video: IYoutubeVideo) => void
}

const VideoItem = ({ video, onVideoClick }: IVideoItemProps) => {
  const { id, snippet } = video

  return (
    <li key={id.videoId} className={styles.videoItem}>
      <button type='button' onClick={() => onVideoClick(video)} className={styles.video}>
        <div className={styles.thumbnail}>
          <img src={snippet.thumbnails.high.url} alt='video thumbnail' />
        </div>
        <div className={styles.title}>{decodeHTMLEntities(snippet.title)}</div>
      </button>
    </li>
  )
}

export default VideoItem
