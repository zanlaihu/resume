import './index.css'

export interface UniProps {
  name: string
  year: string
  major: string
  level: string
  gpa: string
}
export interface UniversityProps {
  uni: UniProps
}

const EUniversity = (props: UniversityProps) => {
  const { name, major, level, gpa, year } = props.uni

  return (
    <div className='university-content'>
      <div className='university-left'>
        <div className='university-name'>{name}</div>
        <div className='e-major'>{major}</div>
        <div className='e-degree-level'>{level}</div>
        <div className='e-gpa'>{gpa}</div>
      </div>
      <div className='unviersity-year'>{year}</div>
    </div>
  )
}

export default EUniversity
