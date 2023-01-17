export const QUERY = gql`
  query FindAllCardsDeckBuilderQuery {
    allCardsDeckBuilder {
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

export const Success = ({ allCardsDeckBuilder }) => {
  return (
    <div className="mx-auto max-w-2xl pb-6 lg:max-w-7xl">
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 xl:gap-x-8">
        {allCardsDeckBuilder.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-md border  p-4 hover:border-green-500"
          >
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 b w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="mt-4 truncate text-gray-700 ">{card.name}</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">
                {card.score} Score
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
