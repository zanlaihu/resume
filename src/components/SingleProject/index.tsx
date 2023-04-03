import './index.css'
import styles from './styles.module.scss'

export interface SingleProjectProps {
  title: string
  desc: string[]
  link?: string
  width?: string
}

const SingleProject = (props: SingleProjectProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>{props.title}：</div>
      <div className={styles.descContent}>
        {props.desc.map(item => (
          <div className={styles.desc}>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleProject
