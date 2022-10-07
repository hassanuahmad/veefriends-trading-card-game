import { Link, routes } from '@redwoodjs/router'

import Cards from 'src/components/Card/Cards'

export const QUERY = gql`
  query FindCards {
    cards {
      id
      name
      pageName
      image
      score
      aura
      skill
      stamina
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cards yet. '}
      <Link to={routes.newCard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ cards }) => {
  return <Cards cards={cards} />
}
