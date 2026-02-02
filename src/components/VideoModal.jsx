import './VideoModal.css'

function VideoModal({ isOpen, videoUrl, title, onClose }) {
    if (!isOpen) return null

    return (
        <div className="video-modal" role="dialog" aria-modal="true">
            <button className="video-modal__backdrop" onClick={onClose} aria-label="Close video"></button>
            <div className="video-modal__content" role="document">
                <button className="video-modal__close" onClick={onClose} aria-label="Close video">
                    <span>&times;</span>
                </button>
                <div className="video-modal__frame">
                    <iframe
                        src={videoUrl}
                        title={title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoModal
