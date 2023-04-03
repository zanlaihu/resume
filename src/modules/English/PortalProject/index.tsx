import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = [
  'My team is called Wallet Technology, which is one of the development teams of Ant International under the Ant Group',
]

const PortalProject = () => {
  return (
    <div className='english-portal-project-content'>
      <div>
        <div className='wallet-project-title'>
          The Offcial Website of Wallet Tech
        </div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortalProject
