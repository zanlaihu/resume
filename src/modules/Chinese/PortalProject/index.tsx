import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = [
  '蚂蚁国际事业群 - 钱包科技团队的官网'
]

const PortalProject = () => {
  return (
    <div className='portal-project-content'>
      <div>
        <div className='wallet-project-title'>钱包科技官网</div>
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
