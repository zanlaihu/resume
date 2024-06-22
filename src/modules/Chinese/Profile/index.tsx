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
        <div className='self'>本科毕业于师范类学校，硕士具有海外留学背景。曾在世界500强外企及国内互联网龙头公司工作。本科期间曾下乡支教，研究生期间兼职编程老师。</div>
      </div>
      <div className='profile-pic-content'>
        <img src={green} className='profil-pic'/>
      </div>
    </div>
  )
}

export default Profile
