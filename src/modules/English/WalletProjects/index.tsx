import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const WalletProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>Alipay International Version</div>
        {[
          "Participated in the front-end development of the international version of Alipay's South African site Vodapay. Responsible for functions such as big carousel, KYC, OTC, discount coupon payment and other functions.",
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WalletProjects
