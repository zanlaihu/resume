import EnglishSingleProject from 'src/components/EnglishSingleProject'
import SingleProject from 'src/components/SingleProject'
import './index.css'

const WalletProjects = () => {
  return (
    <div className='english-wallet-project-content'>
      <div>
        <div className='wallet-project-title'>The Productized Wallet</div>
        {[
          'The productized wallet is the main product sold by the Ant. Lazada, Kakaopay, Vodapay, and DanaPay are achievements of it.',
          'Hybrid application. The business development is carried out by H5. ',
          'Representative functions that developed by me are listed below.'
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='wallet-project-list'>
        <EnglishSingleProject
          title={'Lucky Draw'}
          desc={[
            'Big Turntable Lottery draw function',
            'Prizes are drawn randomly by spinning the wheel.',
          ]}
          width={'230px'}
        />
        <EnglishSingleProject
          title={'Discount Coupons'}
          desc={['Discount Coupon function.','Coupons can be used to offset the order amount.']}
          width={'230px'}
        />
        <EnglishSingleProject
          title={'KYC'}
          desc={[
            'Personal Information Management',
            'Users fill in personal information to use more functions of the wallet',
          ]}
          width={'280px'}
        />
      </div>
    </div>
  )
}

export default WalletProjects
