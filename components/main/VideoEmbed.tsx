export function VideoEmbed ({videoId} : {videoId: string}) {
    return (
        <div className="mx-auto aspect-video w-full max-w-4xl md:my-24">
            <iframe
                className="h-full w-full rounded-xl"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                loading="lazy"
                allowFullScreen
            />
        </div>
    )
}