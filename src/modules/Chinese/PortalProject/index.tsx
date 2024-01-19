import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const desc = ['蚂蚁国际团队的官网之一']

const PortalProject = () => {
  return (
    <div className='portal-project-content'>
      <div>
        <div className='wallet-project-title'>钱包科技官网</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
        <div className={styles.desc}>
          <div className={styles.icon}>•</div>
          官网已经上线，欢迎访问：
          <a className={styles.url}>payment-tech.alipayplus.com</a>
        </div>
      </div>
    </div>
  )
}

export default PortalProject
