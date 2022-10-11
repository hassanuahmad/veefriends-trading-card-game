import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import CardonScoreCell from 'src/components/CardonScoreCell/'

const HomePage = () => {
  const [currentScore, setCurrentScore] = useState(50)

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

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="mx-6 flex flex-wrap justify-start py-4 md:mx-14 lg:mx-20 xl:mx-52">
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
      </div>

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
