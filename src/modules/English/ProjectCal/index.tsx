import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = ['Component library dedicated to productized wallets','Independently developed list, input, dialog, toast, drawer and progress, etc']

const ProjectCal = () => {
  return (
    <div className='english-component-project-content'>
      <div>
        <div className='wallet-project-title'>Python web crawler</div>
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>Automatically scrape user ratings and reviews for Vodapay from the Google Play Store and Apple App Store daily, and send them via email to a specified mailing list.</div>
          </div>
      </div>
    </div>
  )
}

export default ProjectCal
