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
        <div className='self'>师范类本科毕业，海外留硕。世界500强外企、互联网工作经历。下乡支教，兼职编程教师经历。</div>
      </div>
      <div className='profile-pic-content'>
        <img src={green} className='profil-pic'/>
      </div>
    </div>
  )
}

export default Profile
