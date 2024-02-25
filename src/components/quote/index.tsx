export type QuoteProps = {
  quote: string
  by: string
  background?: string
}

const Quote = ({ quote, by, background }: QuoteProps) => {
  return (
    <section className="bg-white w-full">
      <div className="p-8 px-4 tablet:p-16 laptop:p-32">
        <blockquote className="text-xl tablet:text-2xl desktop:text-4xl leading-relaxed mb-4 tablet:mb-8 desktop:mb-16">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <cite className="text-xs tablet:text-base desktop:text-lg font-semibold">
          &mdash; {by}
        </cite>
      </div>
    </section>
  )
}

export default Quote
