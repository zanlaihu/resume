import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const desc = [
  'BO中后台是产品化钱包的配套中后台产品。运营人员可以使用BO配置钱包上的应用。BO也有独立于钱包的功能。',
  '由我独立完成的项目有：批量代发。',
]

const BOProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>BO中后台</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <SingleProject
        title={'批量代发'}
        desc={['BO中后台的批量代发功能。批量代发员工工资以节省企业管理成本。']}
      />
    </div>
  )
}

export default BOProjects
