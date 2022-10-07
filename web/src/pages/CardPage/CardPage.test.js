import { render } from '@redwoodjs/testing/web'

import CardPage from './CardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardPage />)
    }).not.toThrow()
  })
})
