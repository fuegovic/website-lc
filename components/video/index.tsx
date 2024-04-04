export default function Video({ src }: { src: string }) {
  return (
    <video
      muted
      playsInline
      loop
      controls
      className="_mt-6 _rounded-xl"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
