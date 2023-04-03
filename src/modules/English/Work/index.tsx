import University from 'src/components/University'
import { WorkConstant } from 'src/contants/EN'
import './index.css'

const Work = () => {
  return (
    <div className='english-work-content'>
      <div className='work-title'>{WorkConstant.title}</div>
      <div className='work-info'>
        {WorkConstant.works.map(item => (
          <>
            <University uni={item.workInfo} />
            <div className='work-detail-content'>
              {item.workDetail.map(item => (
                <div className='work-detail'>{item}</div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Work
