const SkillCircle = ({ name, number, color }) => {
  return (
    <div>
      <p className={`flex flex-col rounded-3xl border-2 p-6`}>
        <span className="text-3xl">{number}</span>
        <span className={`text-${color}-500`}>{name}</span>
      </p>
    </div>
  )
}

export default SkillCircle
