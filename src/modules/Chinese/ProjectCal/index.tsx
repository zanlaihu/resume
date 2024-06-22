import './index.css'
import styles from './styles.module.scss'

const ProjectWCal = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>Python自动化爬虫</div>
        {[
          '每日自动化爬取Vodapay在Google商店和Apple商店的用户评分及用户评价，并以邮件的形式群发至指定邮箱。',
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectWCal
