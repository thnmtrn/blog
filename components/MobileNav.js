import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import Bookmark from './icons/bookmark.svg'
import Pen from './icons/pen.svg'
import Lightning from './icons/lightning.svg'
import Box from './icons/box.svg'
import Menu from './icons/menu.svg'
import Close from './icons/close.svg'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden flex flex-row">
      <Link href="/blog" className="hover:text-blue-600 dark:hover:text-indigo-500"><Pen className="m-1"/></Link>
      <Link href="/tags" className="hover:text-blue-600 dark:hover:text-indigo-500"><Box className="m-1"/></Link>
      <Link href="/bookmarks" className="hover:text-blue-600 dark:hover:text-indigo-500"><Bookmark className="m-1"/></Link>

                  

            <Lightning className="m-1"/>
      <button
        type="button"
        className="w-8 h-8"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >

          {navShow ? (<Close/>

          ) : (
            <Menu/>
          )}

      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 bg-white dark:bg-black opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
