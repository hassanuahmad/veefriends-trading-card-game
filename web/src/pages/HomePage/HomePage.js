import { useState, Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { MetaTags } from '@redwoodjs/web'

import CardonAlphabetCell from 'src/components/CardonAlphabetCell'
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* TODO: make this responsive the 2 filters */}
      <div className="mx-6 mt-8 flex justify-end md:mx-14 lg:mx-20 xl:mx-52">
        {/* Score Start */}
        <Menu as="div" className="relative mr-8 inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-100">
              Score - {currentScore}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {scores.map((s, id) => (
                  <Menu.Item key={id} as={Fragment}>
                    {({ active }) => (
                      <button
                        key={id}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                        onClick={() => {
                          setCurrentScore(s.score)
                          setSurrentAlphabet()
                        }}
                      >
                        {s.score}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Score End */}

        {/* Alphabet Start */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-100">
              Alphabet - {currentAlphabet}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {alphabets.map((a, id) => (
                  <Menu.Item key={id} as={Fragment}>
                    {({ active }) => (
                      <button
                        key={id}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                        onClick={() => {
                          setSurrentAlphabet(a.alphabet)
                          setCurrentScore(50)
                        }}
                      >
                        {a.alphabet}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Alphabet End */}
      </div>

      <div>
        {currentAlphabet == null ? (
          <CardonScoreCell score={currentScore} />
        ) : (
          <CardonAlphabetCell nameAlphabet={currentAlphabet} />
        )}
      </div>
    </>
  )
}

export default HomePage
