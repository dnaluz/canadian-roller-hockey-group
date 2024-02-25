import Title from '@/components/Title'

export type CheckListProps = {
  title: string
  items: string[]
  background?: string
}

const CheckList = ({ title, items }: CheckListProps) => {
  return (
    <section className="p-8 px-4 tablet:p-16 laptop:p-32">
      <div className="flex flex-row flex-wrap justify-center">
        <Title title={title} className="w-full" />
        <ul className="w-full">
          {items.map((item, index) => {
            return (
              <li
                className="text-base tablet:text-xl desktop:text-2xl font-medium mb-2 flex flex-row items-center"
                key={`${item}-${index}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  className="mr-4 tablet:mr-8"
                >
                  <path
                    fill="#43A047"
                    d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
                  ></path>
                </svg>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default CheckList
