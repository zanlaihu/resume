import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const WalletProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>The Productized Wallet</div>
        {[
          'The productized wallet is the main product sold by the Ant. Lazada, Kakaopay, Vodapay, and DanaPay are achievements of it.',
          'Hybrid application. The business development is carried out by H5. ',
          'Representative functions that developed by me are listed below.',
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <SingleProject
        title={'Lucky Draw'}
        desc={[
          'Big Turntable Lottery draw function',
          'Prizes are drawn randomly by spinning the wheel.',
        ]}
      />
      <SingleProject
        title={'Discount Coupons'}
        desc={[
          'Discount Coupon function.',
          'Coupons can be used to offset the order amount.',
        ]}
      />
      <SingleProject
        title={'KYC'}
        desc={[
          'Personal Information Management',
          'Users fill in personal information to use more functions of the wallet',
        ]}
      />
    </div>
  )
}

export default WalletProjects
