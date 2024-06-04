import './index.css'
import styles from './styles.module.scss'

const ProjectComp = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>前端组件库</div>
        {[
          '专用于Vodapay使用的组件库，可以通过修改UI token快速更换整体UI风格。',
          '负责开发：列表、输入框、弹出对话框、抽屉、进度条等组件。',
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

export default ProjectComp
