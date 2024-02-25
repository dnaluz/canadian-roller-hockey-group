export type TitleProps = {
  title: string
  center?: boolean
  className?: string
}

const Title = ({ title, center, className }: TitleProps) => {
  return (
    <h2
      className={`text-2xl tablet:text-4xl desktop:text-5xl font-semibold mb-4 tablet:mb-6 desktop:mb-8 leading-10 ${center ? 'text-center' : ''} ${className ?? ''}`}
    >
      {title}
    </h2>
  )
}

export default Title
