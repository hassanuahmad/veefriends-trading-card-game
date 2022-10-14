import SkillCircle from '../SkillCircle/'

export const QUERY = gql`
  query FindCardQuery($id: Int!) {
    card: card(id: $id) {
      id
      name
      image
      score
      skill
      aura
      stamina
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ card }) => {
  return (
    <div className="mx-6 grid grid-cols-1 py-12 font-bold md:mx-14 lg:mx-20 lg:grid-cols-2 xl:mx-52">
      <img className="rounded-3xl shadow-2xl" src={`../${card.image}`} alt="" />
      <div className="mt-6 md:ml-6">
        <h1 className="text-5xl">{card.name}</h1>
        <div className="py-12 text-center">
          <SkillCircle name="Score" color="zinc" number={card.score} />
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <SkillCircle
            name="Aura"
            number={card.aura}
            textColor="text-yellow-400"
            borderColor="border-yellow-400"
          />
          <SkillCircle
            name="Skill"
            number={card.skill}
            textColor="text-green-600"
            borderColor="border-green-600"
          />
          <SkillCircle
            name="Stamina"
            number={card.stamina}
            textColor="text-red-600"
            borderColor="border-red-600"
          />
        </div>
      </div>
    </div>
  )
}
