import Blank from '../../../components/Blank'
import University from '../../../components/University'
import { EducationConstant } from '../../../contants/CH'
import './index.css'

const Education = () => {
  return (
    <div className='education-content'>
      <div className='education-title'>{EducationConstant.title}</div>
      <div className='education-unis'>
        {EducationConstant.unis.map(item => (
          <University uni={item} />
        ))}
      </div>
    </div>
  )
}

export default Education
