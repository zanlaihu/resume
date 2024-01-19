import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const WalletProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>国际版支付宝</div>
        {[
          '国际版支付宝为hybrid应用，以iOS和安卓为壳，前端负责业务开发',
          '我负责开发的功能为：大转盘、折扣券、KYC等',
        ].map(item => (
          <div className={styles.descContent}>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div>
        <SingleProject
          title={'大转盘'}
          desc={['包含原生JS实现的动态转盘、剩余抽奖券、已获得的奖品、奖池等数个独立页面']}
        />
        <SingleProject
          title={'折扣券'}
          desc={['独立的折扣券页面，通过钱包内多个入口进入']}
        />
        <SingleProject
          title={'KYC'}
          desc={[
            '个人信息功能，引导用户填写个人信息的数个页面',
          ]}
        />
      </div>
    </div>
  )
}

export default WalletProjects
