import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav() {
  const router = useRouter()
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overscroll-auto'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className='last:pr-24 cursor-pointer transition duration-500 transform hover:scale-125 hover:text-white active:underline'
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      {/* the fade on the righ side of the nav in smaller screen */}
      <div className='absolute top-0 right-0 bg-gradient-to-l from-transparent from-[#06202A] h-10 w-1/12'></div>
    </nav>
  )
}

export default Nav
