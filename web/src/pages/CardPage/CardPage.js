import { MetaTags } from '@redwoodjs/web'

import CardCell from 'src/components/CardCell'

const CardPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Card" description="Card page" />

      <CardCell id={id} />
    </>
  )
}

export default CardPage
