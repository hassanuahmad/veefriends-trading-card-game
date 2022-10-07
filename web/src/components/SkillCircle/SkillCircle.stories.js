// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SkillCircle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SkillCircle from './SkillCircle'

export const generated = () => {
  return <SkillCircle />
}

export default {
  title: 'Components/SkillCircle',
  component: SkillCircle,
}
