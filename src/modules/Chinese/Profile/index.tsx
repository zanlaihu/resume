import ProfileInfo from '../../../components/ProfileInfo'
import './index.css'
import phone from 'src/assets/img/phone.svg'
import email from 'src/assets/img/email.svg'
import frame from 'src/assets/img/frame.svg'
import { PersonalWebsiteUrl, ProfileConstant } from '../../../contants/CH'

const Profile = () => {
  return (
    <div className='profile-content'>
      <div>
        <div className='name'>
          <div>{ProfileConstant.title}</div>
        </div>
        <div className='web'>
          {ProfileConstant.web}
          <a
            target='_blank'
            rel='noreferrer'
            className='weblink'
            href='https://zanlaihu.github.io/blog/'
          >
            {PersonalWebsiteUrl}
          </a>
        </div>
        <div className='profile-contact'>
          <ProfileInfo title={ProfileConstant.phone} img={phone} />
          <ProfileInfo title={ProfileConstant.email} img={email} />
        </div>
      </div>
      <div className='profile-qr'>
        <img src={frame}></img>
      </div>
    </div>
  )
}

export default Profile
