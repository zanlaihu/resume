import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const desc = [
  'The BO Middle Office is the supporting product for the productized wallet. Operators can use BO to configure applications on the wallet. BO also offer functions independent of the wallet.',
  'The project that developed independently by me: Bulk Disbursement.',
]

const BOProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>BO Middle Office</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <SingleProject
        title={'Bulk Disbursement'}
        desc={[
          'The Bulk Disbursement send employee wages in batches to save enterprise management costs.',
        ]}
      />
    </div>
  )
}

export default BOProjects
