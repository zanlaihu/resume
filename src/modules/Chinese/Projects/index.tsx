import BOProjects from '../BOProjects'
import './index.css'
import { ProjectConstant } from 'src/contants/CH'
import University from 'src/components/University'

const Projects = () => {
  return (
    <div className='projects-content'>
      <div className='education-title'>项目经历</div>
      <div className='line'></div>
      <div className='work-info'>
        {ProjectConstant.projects.map(item => (
          <>
            <University uni={item.workInfo} />
            <div className='work-detail-content'>
              {item.desc.map(item => (
                <div className='work-detail'>{item}</div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Projects
