import Image from 'next/image'

function Loading() {
  return (
    <Image
    src="/loader.svg"
    width="100"
    height="100"
    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    alt="Loader spinner"
  />
  )
}

export default Loading