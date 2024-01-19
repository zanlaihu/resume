import styles from './styles.module.scss'
import Education from 'src/modules/Chinese/Education'
import Profile from 'src/modules/Chinese/Profile'
import Projects from 'src/modules/Chinese/Projects'
import Skills from 'src/modules/Chinese/Skills'
import Thanks from 'src/modules/Chinese/Thanks'
import Work from 'src/modules/Chinese/Work'


const ChineseResume = () => {
  return (
    <div className={styles.content}>
      <div>
        <Profile />
        {/* <Skills /> */}
        <Education />
        <Work />
        <Projects />
      </div>
      <Thanks />
    </div>
  )
}

export default ChineseResume
