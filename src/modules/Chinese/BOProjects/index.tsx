import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const desc = [
  '批量代发员工工资以节省企业管理成本'
]

const BOProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>BO-批量代发</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BOProjects
