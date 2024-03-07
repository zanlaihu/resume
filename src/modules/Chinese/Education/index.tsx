import Blank from '../../../components/Blank'
import University from '../../../components/University'
import { EducationConstant } from '../../../contants/CH'
import './index.css'

const Education = () => {
  return (
    <div className='education-content'>
      <div className='education-title'>教育经历</div>
      <div className='line'></div>
      <div className='education-unis'>
        {EducationConstant.unis.map(item => (
          <University uni={item} />
        ))}
      </div>
    </div>
  )
}

export default Education
