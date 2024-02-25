import Link from 'next/link'

export type CTAProps = {
  copy: string
  secondary?: boolean
  className?: string
  url: string
}

const CTA = ({ copy, secondary, className, url }: CTAProps) => {
  return (
    <Link
      href="#"
      className={`${!secondary ? 'bg-red-700 text-white hover:bg-white hover:text-red-700' : 'bg-white text-red700 hover:bg-red-700 hover:text-white'} min-w-24 laptop:min-w-32 text-center p-2.5 desktop:p-3 rounded-3xl text-xs font-medium mx-2 tracking-wide transition-all duration-500 hover:cursor-pointer ${className} inline-block`}
    >
      {copy}
    </Link>
  )
}

export default CTA
