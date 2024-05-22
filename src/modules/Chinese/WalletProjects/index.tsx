import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const WalletProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>南非版支付宝（Vodapay）</div>
        {[
          'Vodapay是支付宝南非站点。前身为韩国版支付宝Kakaopay和欧洲版支付宝Danapay。 ',
          'Vodapay为混合型前端应用，由iOS和安卓制作框架，H5开发应用功能，一次开发多次使用。',
          '我负责开发了以下功能：',
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <SingleProject
        title={'幸运大转盘'}
        desc={[
          '幸运大转盘是Vodapay新增功能，引入动态转盘交互，展示抽奖结果。',
          '用户使用Vodapay的各项功能（如转账、付款、收款等）后，系统会根据规则赠送抽奖券。用户可使用抽奖券抽取奖品。',
          '大转盘由7个页面组成：Campaign list page、Lucky draw detail page、Lucky draw page、Rewards page、Voucher detail page、Chance token page。实现抽奖入口、抽奖转盘页、抽奖券列表等一系列功能。'
        ]}
      />
      <SingleProject
        title={'折扣券支付'}
        desc={[
          '迭代原有的支付功能，添加“现金+折扣券”模式的付款功能。',
          '迭代收银台页面，实时显示折扣券添加后的减免金额。',
        ]}
      />
      <SingleProject
        title={'KYC功能'}
        desc={[
          '用户填写个人信息的功能。',
        ]}
      />
    </div>
  )
}

export default WalletProjects
