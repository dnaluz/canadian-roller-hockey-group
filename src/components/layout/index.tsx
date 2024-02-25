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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLInputElement>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        leagueMenuOpen &&
        menuRef.current &&
        !menuRef.current?.contains(e.target)
      ) {
        setLeagueMenuOpen(false)
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
            <div className="w-full flex justify-end laptop:hidden">
              <button
                className="h-5 w-8 z-200 relative bg-transparent before:absolute before:w-full before:rounded-full before:bg-white before:top-0 before:left-0 before:block before:h-hamburger after:absolute after:w-full after:rounded-full after:bg-white after:bottom-0 after:left-0 after:block after:h-hamburger"
                onClick={() => {
                  toggleMobileMenu()
                }}
              >
                <div className="before:w-full rounded-full bg-white h-hamburger"></div>
              </button>
            </div>
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
        <div
          className={`p-4 z-200 w-full h-screen laptop:hidden bg-red-700 transition-all duration-700 ${mobileMenuOpen ? 'translate-x-0 fixed overscroll-contain' : 'absolute translate-x-full'}`}
        >
          <button
            onClick={() => {
              toggleMobileMenu()
            }}
          >
            <svg
              fill="#ffffff"
              height="15px"
              width="15px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460.775 460.775"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{' '}
            </svg>
            <div className="w-full mt-8 text-white text-2xl font-semibold">
              <ul className="w-full text-left">
                <li className="mb-4">
                  <Link href="/leagues/halton">Halton Roller Hockey</Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/mississauga">
                    Mississauga Roller Hockey
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/kitchener-waterloo">
                    Kitchener/Waterloo Roller Hockey
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/kitchener-waterloo">Why Roller?</Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/kitchener-waterloo">About Us</Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/kitchener-waterloo">Contact Us</Link>
                </li>
                <li className="mb-4">
                  <Link href="/leagues/kitchener-waterloo">Shop</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
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
