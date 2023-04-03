import './index.css'

export interface SingleSkillProps {
  skill: string
}

const SingleSkill = (props: SingleSkillProps) => {
  return <div className='single-skill-content'>{props.skill}</div>
}

export default SingleSkill
