import './index.css'
import styles from './styles.module.scss'

const ProjectSan = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>三井住友银行贷款APP</div>
        {[
          '帮助三井住友银行开发的在线贷款软件。',
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

export default ProjectSan
