import email from 'src/assets/img/email.svg'
import green from 'src/assets/img/green1.jpg'
import phone from 'src/assets/img/phone.svg'
import birth from 'src/assets/img/birth.svg'
import ProfileInfo from 'src/components/ProfileInfo'
import { PersonalWebsiteUrl, ProfileConstant } from 'src/contants/CH'
import './index.css'

const Profile = () => {
  return (
    <div className='profil-content'>
      <div>
        <div className='name'>胡赞来</div>
        <div className='infocontent'>
          <ProfileInfo title={ProfileConstant.phone} img={phone} />
          <ProfileInfo title={ProfileConstant.email} img={email} />
          <ProfileInfo title={"1994/3/13"} img={birth} />
        </div>
        <div className='self'>海外留学背景，世界500强外企及互联网工作经历。本科毕业于师范类院校，具有支教经历。</div>
      </div>
      <div className='profile-pic-content'>
        <img src={green} className='profil-pic'/>
      </div>
    </div>
  )
}

export default Profile
