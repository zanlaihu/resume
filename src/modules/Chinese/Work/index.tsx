import University from 'src/components/University'
import { WorkConstant } from 'src/contants/CH'
import './index.css'
import styles from './styles.module.scss'

const Work = () => {
  return (
    <div className={styles.content}>
      <div className='education-title'>工作经历</div>
      <div className='line'></div>
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
