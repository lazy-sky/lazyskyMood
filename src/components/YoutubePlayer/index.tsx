import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

import Search from 'components/Search'
import { getVideosByKeyword } from 'service/youtube'
import VideoItem from 'components/VideoItem'

import style from './youtubePlayer.module.scss'

const YoutubePlayer = () => {
  const [videos, setVideos] = useState<IYoutubeVideo[]>([])
  const [selectedVideo, setSelectedVideo] = useState<IYoutubeVideo | null>(null)
  const [videoUrl, setVideoUrl] = useState('')
  const [videoId, setVideoId] = useState('')
  const [isInvalidUrl, setIsInvalidUrl] = useState(false)

  useEffect(() => {
    if (selectedVideo) {
      setVideoId(selectedVideo.id.videoId)
    }
  }, [selectedVideo])

  const handleVideoClick = (video: IYoutubeVideo) => {
    setSelectedVideo(video)
  }

  const search = async (query: string) => {
    setIsInvalidUrl(false)
    setSelectedVideo(null)
    const response = await getVideosByKeyword(query)
    setVideos(response)
  }

  const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setVideoUrl(e.currentTarget.value)
  }

  const handleUrlSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    try {
      setVideoId(new URL(videoUrl).searchParams.get('v') || '')
      setIsInvalidUrl(false)
    } catch (error) {
      setIsInvalidUrl(true)
    }
  }

  return (
    <section className={style.youtubePlayer}>
      {/* TODO: Search로 통합 */}
      <form onSubmit={handleUrlSubmit} className={style.urlSearch}>
        <input type='text' placeholder='URL here' onChange={handleUrlChange} />
        <button type='submit'>Search</button>
      </form>
      <Search onSearch={search} />
      {isInvalidUrl && 'invalid url'}
      <div className={style.selectedVideo}>
        {videoId && (
          <ReactPlayer url={`https://www.youtube.com/embed/${videoId}`} controls width='100%' height='100%' />
        )}
      </div>
      <ul className={style.videoList}>
        {/* TODO: Pagination */}
        {videos.map((video) => (
          <VideoItem key={video.id.videoId} video={video} onVideoClick={handleVideoClick} />
        ))}
      </ul>
    </section>
  )
}

export default YoutubePlayer
