import { render } from '@redwoodjs/testing/web'

import DeckBuilderPage from './DeckBuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeckBuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeckBuilderPage />)
    }).not.toThrow()
  })
})
