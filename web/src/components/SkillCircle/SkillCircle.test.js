import { render } from '@redwoodjs/testing/web'

import SkillCircle from './SkillCircle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SkillCircle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SkillCircle />)
    }).not.toThrow()
  })
})
