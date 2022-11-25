import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindCardonScoreQuery($score: Int!) {
    cardonScore: cardonScore(score: $score) {
      id
      name
      image
      score
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ cardonScore }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-6 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {cardonScore.map((card, index) => (
          <Link
            key={index}
            to={routes.singleCard({ id: card.id })}
            className="group flex flex-col justify-between rounded-md border p-4"
          >
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div>
              <h3 className="mt-4 truncate text-xl text-gray-700 group-hover:text-green-500">
                {card.name}
              </h3>
              <p className="mt-1 text-lg font-bold text-gray-900">
                {card.score} Score
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
