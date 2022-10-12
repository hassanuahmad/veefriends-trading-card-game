const SkillCircle = ({ name, number, textColor, borderColor }) => {
  return (
    <div>
      <p className={`flex flex-col rounded-3xl border-2 ${borderColor} p-6`}>
        <span className="text-3xl">{number}</span>
        <span className={`${textColor}`}>{name}</span>
      </p>
    </div>
  )
}

export default SkillCircle
