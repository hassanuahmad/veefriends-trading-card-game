import { MetaTags } from '@redwoodjs/web'

import CardCell from 'src/components/CardCell'

const CardPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Card" description="Card page" />

      <div>
        <CardCell id={id} />
      </div>
    </>
  )
}

export default CardPage
