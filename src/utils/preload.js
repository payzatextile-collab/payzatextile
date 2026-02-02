/**
 * Video Preloading Utility
 * Preloads Vimeo iframes and videos for faster loading
 */

export const preloadVideos = () => {
    // List of Vimeo video IDs to preload
    const videoIds = [
        '1108826568', // Hero background
        '1136411580', // Production/Process video
        '1124425639'  // Quality standards video
    ]

    // Preload Vimeo player script
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    document.body.appendChild(script)

    // Preconnect to Vimeo CDN
    const preconnectLink = document.createElement('link')
    preconnectLink.rel = 'preconnect'
    preconnectLink.href = 'https://f.vimeocdn.com'
    document.head.appendChild(preconnectLink)

    // Preload video frames
    videoIds.forEach((videoId) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'iframe'
        link.href = `https://player.vimeo.com/video/${videoId}`
        document.head.appendChild(link)

        // Also create a hidden iframe to start loading
        const iframe = document.createElement('iframe')
        iframe.src = `https://player.vimeo.com/video/${videoId}?h=37630d6219&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&dnt=1`
        iframe.style.display = 'none'
        iframe.style.pointerEvents = 'none'
        iframe.allow = 'autoplay; fullscreen; picture-in-picture'
        iframe.setAttribute('data-preload', 'true')
        document.body.appendChild(iframe)
    })
}

/**
 * Preload images
 */
export const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
    })
}

/**
 * Initialize all preloading
 */
export const initializePreloading = () => {
    // Preload videos
    preloadVideos()

    // You can add image URLs here as needed
    // preloadImages(['/path/to/image1.jpg', '/path/to/image2.jpg'])
}

export default initializePreloading
