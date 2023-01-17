import { MetaTags } from '@redwoodjs/web'

import AllCardsDeckBuilderCellStories from 'src/components/AllCardsDeckBuilderCell/AllCardsDeckBuilderCell.js'

const DeckBuilderPage = () => {
  return (
    <>
      <MetaTags title="DeckBuilder" description="DeckBuilder page" />
      <div className="mx-auto max-w-2xl  pb-6 lg:max-w-7xl">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h1 className="pb-6 text-2xl font-semibold">
            VeeFriends C&C Deck Builder
          </h1>

          <AllCardsDeckBuilderCellStories />
        </div>
      </div>
    </>
  )
}

export default DeckBuilderPage
