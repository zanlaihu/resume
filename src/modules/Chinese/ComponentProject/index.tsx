import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = ['专用于产品化钱包的组件库','独立负责部分组件的开发，其中有：list、input、dialog、toast、drawer、progress等组件']

const ComponentProject = () => {
  return (
    <div className='component-project-content'>
      <div>
        <div className='wallet-project-title'>产品化组件库</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      {/* <div className='single-project-view'>
        <a target='_blank' rel='noreferrer' className='weblink' href={''}>
          view more
        </a>
      </div> */}
    </div>
  )
}

export default ComponentProject
