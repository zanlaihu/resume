import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const desc = [
  'Develop an online loan software for Sumitomo Mitsui Banking Corporation (SMBC)',
]

const BOProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>SMBC Online loan software</div>
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
