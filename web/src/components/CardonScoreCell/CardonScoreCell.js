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
  return cardonScore.map((card, index) => (
    <div key={index}>
      <Link to={routes.singleCard({ id: card.id })}>
        <div className="group rounded-2xl border-2 bg-white p-6">
          <img className="rounded-2xl" src={card.image} alt="" />
          <div>
            <h1 className="truncate py-2 text-2xl font-medium group-hover:text-green-500">
              {card.name}
            </h1>
            <p className="text-sm">
              <b className="text-2xl">{card.score} </b>SCORE
            </p>
          </div>
        </div>
      </Link>
    </div>
  ))
}
