import { EducationConstant } from 'src/contants/EN'
import EUniversity from 'src/components/EUniversity'
import './index.css'

const Education = () => {
  return (
    <div className='education-content'>
      <div className='education-title'>{EducationConstant.title}</div>
      <div className='education-unis'>
        {EducationConstant.unis.map(item => (
          <EUniversity uni={item} />
        ))}
      </div>
    </div>
  )
}

export default Education
