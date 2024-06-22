import './index.css'
import styles from './styles.module.scss'

const ProjectWeb = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>钱包科技官网</div>
        {[
          '为钱包科技团队设计开发的官方网站。',
          'payment-tech.alipayplus.com',
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

export default ProjectWeb
