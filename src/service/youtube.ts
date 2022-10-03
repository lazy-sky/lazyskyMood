import axios from 'axios'

const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
})

// ref: https://developers.google.com/youtube/v3/docs/search/list?hl=ko
export const getVideosByKeyword = async (query: String) => {
  const response = await youtubeClient.get('search', {
    params: {
      part: 'snippet',
      maxResults: 30,
      type: 'video',
      q: query,
    },
  })

  return response.data.items
}
