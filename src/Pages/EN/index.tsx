import Education from 'src/modules/English/Education'
import Profile from 'src/modules/English/Profile'
import Projects from 'src/modules/English/Projects'
import Skills from 'src/modules/English/Skills'
import Thanks from 'src/modules/English/Thanks'
import Work from 'src/modules/English/Work'
import styles from 'styles.module.scss'

const ChineseResume = () => {
  return (
    <div className='chinese-content'>
      <div>
        <Profile />
        <Skills />
        <Education />
        <Work />
        <Projects />
      </div>
      <Thanks />
    </div>
  )
}

export default ChineseResume
