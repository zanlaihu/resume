import email from 'src/assets/img/email.svg'
import frame from 'src/assets/img/frame.svg'
import phone from 'src/assets/img/phone.svg'
import birth from 'src/assets/img/birth.svg'
import ProfileInfo from 'src/components/ProfileInfo'
import { PersonalWebsiteUrl, ProfileConstant } from 'src/contants/CH'
import './index.css'
import styles from './styles.module.scss'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <div className='name'>
          <div>{ProfileConstant.title}</div>
        </div>

        <div className={styles.contract}>
          <ProfileInfo title={ProfileConstant.phone} img={phone} />
          <ProfileInfo title={ProfileConstant.email} img={email} />
          <ProfileInfo title={"1994"} img={birth} />
        </div>
        {/* <div className='web'>
          {ProfileConstant.web}
          <a
            target='_blank'
            rel='noreferrer'
            className='weblink'
            href='https://zanlaihu.github.io/blog/'
          >
            {PersonalWebsiteUrl}
          </a>
        </div> */}
      </div>
      {/* <div className='profile-qr'>
        <img src={frame}></img>
      </div> */}
    </div>
  )
}

export default Profile
