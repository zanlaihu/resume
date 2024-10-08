import ProfileInfo from '../../../components/ProfileInfo'
import './index.css'
import phone from 'src/assets/img/phone.svg'
import email from 'src/assets/img/email.svg'
import frame from 'src/assets/img/frame.svg'
import birth from 'src/assets/img/birth.svg'
import { PersonalWebsiteUrl, ProfileConstant } from 'src/contants/EN'

const Profile = () => {
  return (
    <div className='english-profile-content'>
      <div>
        <div className='name'>
          <div>{ProfileConstant.title}</div>
        </div>

        <div className='profile-contact'>
          <ProfileInfo title={ProfileConstant.phone} img={phone} />
          <ProfileInfo title={ProfileConstant.email} img={email} />
          <ProfileInfo title={"1994/3/13"} img={birth} />
        </div>
        <div className='web'>
          {ProfileConstant.web}
        </div>
      </div>
      {/* <div className='profile-qr'>
        <img src={frame}></img>
      </div> */}
    </div>
  )
}

export default Profile
