import email from 'src/assets/img/email.svg'
import frame from 'src/assets/img/frame.svg'
import phone from 'src/assets/img/phone.svg'
import birth from 'src/assets/img/birth.svg'
import ProfileInfo from 'src/components/ProfileInfo'
import { PersonalWebsiteUrl, ProfileConstant } from 'src/contants/CH'
import './index.css'

const Profile = () => {
  return (
    <div>
      <div className='name'>胡赞来</div>
      <div>
        <div className='infocontent'>
          <ProfileInfo title={"户口：上海"} />
          <ProfileInfo title={ProfileConstant.phone} img={phone} />
          <ProfileInfo title={ProfileConstant.email} img={email} />
          <ProfileInfo title={"1994/3/13"} img={birth} />
        </div>
      </div>
      {/* <div className='profile-qr'>
        <img src={frame}></img>
      </div> */}
    </div>
  )
}

export default Profile
