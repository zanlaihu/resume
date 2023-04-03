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

const University = (props: UniversityProps) => {
  const { name, major, level, gpa, year } = props.uni

  return (
    <div className='university-content'>
      <div className='university-left'>
        <div className='university-name'>{name}</div>
        <div className='major'>{major}</div>
        <div className='degree-level'>{level}</div>
        <div className='gpa'>{gpa}</div>
      </div>
      <div className='unviersity-year'>{year}</div>
    </div>
  )
}

export default University
