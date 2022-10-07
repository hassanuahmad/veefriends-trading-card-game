import { cards, card, createCard, updateCard, deleteCard } from './cards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cards', () => {
  scenario('returns all cards', async (scenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })

  scenario('returns a single card', async (scenario) => {
    const result = await card({ id: scenario.card.one.id })

    expect(result).toEqual(scenario.card.one)
  })

  scenario('creates a card', async () => {
    const result = await createCard({
      input: {
        name: 'String',
        pageName: 'String',
        image: 'String',
        score: 4555129,
        aura: 4566573,
        skill: 3385947,
        stamina: 5158905,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.pageName).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.score).toEqual(4555129)
    expect(result.aura).toEqual(4566573)
    expect(result.skill).toEqual(3385947)
    expect(result.stamina).toEqual(5158905)
  })

  scenario('updates a card', async (scenario) => {
    const original = await card({ id: scenario.card.one.id })
    const result = await updateCard({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a card', async (scenario) => {
    const original = await deleteCard({ id: scenario.card.one.id })
    const result = await card({ id: original.id })

    expect(result).toEqual(null)
  })
})
