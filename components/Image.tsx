import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`https://Rikidink.github.io/algorithmica${src}`} {...rest} />
)

export default Image
