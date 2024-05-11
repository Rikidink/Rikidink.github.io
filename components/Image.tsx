import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/algorithmica${src}`} {...rest} />
)

export default Image
