import Link from 'next/link'
import Image from 'next/image'

import { Inter } from 'next/font/google'

import { useAppSelector } from '@/hooks'
import logo from '@/../public/logo.png'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const { navBackground } = useAppSelector((state) => state.nav)
  const [leagueMenuOpen, setLeagueMenuOpen] = useState(false)
  const menuRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        leagueMenuOpen &&
        menuRef.current &&
        !menuRef.current?.contains(e.target)
      ) {
        setLeagueMenuOpen(false)
        console.log(leagueMenuOpen)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [leagueMenuOpen])

  return (
    <>
      <header>
        <nav
          className={`fixed w-full z-200 px-4 tablet:px-16 duration-250 transition-all before:absolute before:block before:bg-red-700 before:h-full before:transition-all before:duration-250 before:left-0 before:w-full ${navBackground}`}
        >
          <div className="flex flex-row text-white items-center relative z-200">
            <Link href="/" className="py-2">
              <Image
                src={logo}
                alt="Canadian Roller Hockey Group"
                width={42}
                className="hidden tablet:block"
              />
              <Image
                src={logo}
                alt="Canadian Roller Hockey Group"
                width={32}
                className="tablet:hidden"
              />
            </Link>
            <ul className="hidden tablet:flex ml-auto mr-0 flex-row text-xs desktop:text-sm font-medium tracking-wide">
              <li className="mx-2 relative">
                <a
                  onClick={() => setLeagueMenuOpen(!leagueMenuOpen)}
                  className="decoration-0 relative hover:cursor-pointer mb-5 hover:decoration-1 hover:underline transition-all"
                >
                  Leagues
                </a>
                <div
                  className={`${leagueMenuOpen ? 'bg-red-700' : 'opacity-0'} absolute -bottom-100 -left-2 p-6 w-80 mt-7 right-100 before:border-l-[6px] before:border-l-transparent
                  before:border-b-[9px] before:border-b-red-700 before:border-r-[6px] before:border-r-transparent before:absolute before:block before:-top-9 before:left-7 rounded-md border-1 border-red-700`}
                  ref={menuRef}
                >
                  <ul>
                    <li className="mb-1">
                      <Link href="/leagues/halton">Halton Roller Hockey</Link>
                    </li>
                    <li className="mb-1 desktop:text-base">
                      <Link href="/leagues/mississauga">
                        Mississauga Roller Hockey
                      </Link>
                    </li>
                    <li className="mb-1 desktop:text-base">
                      <Link href="/leagues/kitchener-waterloo">
                        Kitchener/Waterloo Roller Hockey
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mx-2">Why Roller?</li>
              <li className="mx-2">About Us</li>
              <li className="mx-2">Contact Us</li>
              <li className="mx-2">Shop</li>
            </ul>
          </div>
        </nav>
      </header>
      <main className={` min-h-screen ${inter.className}`}>{children}</main>
      <footer className="bg-red-700 min-h-32 px-8 tablet:px-16 py-16 tablet:py-32">
        <div className="flex flex-col tablet:flex-row">
          <div className="w-full tablet:w-1/3">
            <ul className="text-sm text-white font-medium">
              <li className="tablet:mx-2">Leagues</li>
              <li className="tablet:mx-2">Why Roller?</li>
              <li className="tablet:mx-2">About Us</li>
              <li className="tablet:mx-2">Contact Us</li>
              <li className="tablet:mx-2">Shop</li>
            </ul>
          </div>
          <div className="w-full tablet:w-1/3">
            <ul className="text-sm text-white font-medium">
              <li className="tablet:mx-2">Halton Roller Hockey</li>
              <li className="tablet:mx-2">Mississauga Roller Hockey</li>
              <li className="tablet:mx-2">Kitchener Waterloo Roller Hockey</li>
            </ul>
          </div>
          <div className="w-full tablet:w-1/3">
            <ul className="text-sm text-white">
              <li className="tablet:mx-2">Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
