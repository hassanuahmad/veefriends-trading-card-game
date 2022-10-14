import { useState, Fragment } from 'react'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'

import { MetaTags } from '@redwoodjs/web'

import CardonScoreCell from 'src/components/CardonScoreCell/'

const HomePage = () => {
  const [currentScore, setCurrentScore] = useState(50)
  const [currentAlphabet, setSurrentAlphabet] = useState()

  const scores = [
    { score: 50 },
    { score: 51 },
    { score: 52 },
    { score: 53 },
    { score: 54 },
    { score: 55 },
    { score: 56 },
    { score: 57 },
    { score: 58 },
    { score: 59 },
    { score: 60 },
    { score: 61 },
    { score: 62 },
    { score: 63 },
    { score: 64 },
    { score: 65 },
    { score: 66 },
    { score: 67 },
    { score: 68 },
    { score: 69 },
    { score: 70 },
    { score: 71 },
    { score: 72 },
    { score: 73 },
    { score: 74 },
    { score: 75 },
  ]

  const alphabets = [
    { alphabet: 'A' },
    { alphabet: 'B' },
    { alphabet: 'C' },
    { alphabet: 'D' },
    { alphabet: 'E' },
    { alphabet: 'F' },
    { alphabet: 'G' },
    { alphabet: 'H' },
    { alphabet: 'I' },
    { alphabet: 'J' },
    { alphabet: 'K' },
    { alphabet: 'L' },
    { alphabet: 'M' },
    { alphabet: 'N' },
    { alphabet: 'O' },
    { alphabet: 'P' },
    { alphabet: 'Q' },
    { alphabet: 'R' },
    { alphabet: 'S' },
    { alphabet: 'T' },
    { alphabet: 'U' },
    { alphabet: 'V' },
    { alphabet: 'W' },
    { alphabet: 'X' },
    { alphabet: 'Y' },
    { alphabet: 'Z' },
  ]

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="mx-6 my-8 flex justify-end md:mx-14 lg:mx-20 xl:mx-52">
        {/* ALPHABET START */}
        {/* <Menu as="div" className="relative mr-12 inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-green-500 px-6 py-3 text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Alphabet - {currentAlphabet}
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {alphabets.map((a, id) => (
              <Menu.Item key={id} as={Fragment}>
                {({ active }) => (
                  <button
                    key={id}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setSurrentAlphabet(a.alphabet)}
                  >
                    {a.alphabet}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu> */}
        {/* ALPHABET END */}

        {/* SCORE START */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-green-500 px-6 py-3 text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div>
                Score - {currentScore}
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </div>
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {scores.map((s, id) => (
              <Menu.Item key={id} as={Fragment}>
                {({ active }) => (
                  <button
                    key={id}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setCurrentScore(s.score)}
                  >
                    {s.score}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        {/* SCORE END */}
      </div>

      {/* <div className="mx-6 flex flex-wrap justify-start py-4 md:mx-14 lg:mx-20 xl:mx-52">
        {scores.map((s, id) => (
          <div className="py-4" key={id}>
            <button
              className="px-6 hover:rounded-full hover:bg-slate-100"
              onClick={() => setCurrentScore(s.score)}
            >
              {s.score}
            </button>
          </div>
        ))}
      </div> */}

      <div
        className="
        mx-6
      grid grid-cols-1 gap-6
       md:mx-14 md:grid-cols-2
      md:gap-14 lg:mx-20 lg:grid-cols-3
      lg:gap-6
      xl:mx-52
      xl:grid-cols-4
      "
      >
        <CardonScoreCell score={currentScore} />
      </div>
    </>
  )
}

export default HomePage
