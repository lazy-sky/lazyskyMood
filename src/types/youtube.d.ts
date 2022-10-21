interface IYoutubeVideo {
  id: {
    videoId: string
  }
  etag: string
  kind: string
  snippet: {
    title: string
    channelTitle: string
    description: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}
