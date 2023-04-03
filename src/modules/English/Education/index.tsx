import { EducationConstant } from 'src/contants/EN'
import University from 'src/components/University'
import './index.css'

const Education = () => {
  return (
    <div className='education-content'>
      <div className='education-title'>{EducationConstant.title}</div>
      <div className='education-unis'>
        {EducationConstant.unis.map(item => (
          <University uni={item} />
        ))}
        {/* <University
          name={'新南威尔士大学'}
          year={'2018 - 2020'}
          major={'信息技术'}
          level={'硕士'}
          gpa={'GPA: 76/100 TOP 20%'}
        />
        <Blank />
        <University
          name={'浙江师范大学'}
          year={'2013 - 2017'}
          major={'软件工程'}
          level={'学士'}
          gpa={'GPA: 86/100 TOP 10%'}
        /> */}
      </div>
    </div>
  )
}

export default Education
