import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = ['Component library dedicated to productized wallets','Independently developed list, input, dialog, toast, drawer and progress, etc']

const ComponentProject = () => {
  return (
    <div className='english-component-project-content'>
      <div>
        <div className='wallet-project-title'>The Component package of Productized Wallet</div>
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
