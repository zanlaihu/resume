import SingleProject from 'src/components/SingleProject'
import './index.css'
import styles from './styles.module.scss'

const WalletProjects = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introContent}>
        <div className='wallet-project-title'>南非版支付宝（Vodapay）</div>
        {[
          'Vodapay是支付宝南非站点，前身为韩国版支付宝Kakaopay和欧洲版支付宝Danapay，由iOS和安卓制作框架，H5开发应用功能，属于混合型应用（Hybrid），一次开发多次使用。',
          '前身由Vue框架编写，需要阅读老代码并使用React框架重构。项目也存在从0开发的新功能。我开发的代表功能有：',
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
          '大转盘是新增功能，没有前例参考。在设计时我查阅了大量大转盘例子，最后决定使用原生JS实现转动效果。',
          '该功能共由7个页面组成，实现抽奖入口、抽奖转盘页、抽奖券列表查阅等一系列功能。'
        ]}
      />
      <SingleProject
        title={'折扣券支付'}
        desc={[
          '在原有支付功能上，新增了添加折扣券模式的付款功能。难点在于需要熟悉原有支付流程后，再进行添砖加瓦。在迭代过程中不造成原有功能的瘫痪。',
        ]}
      />
      <SingleProject
        title={'KYC功能'}
        desc={[
          '用户填写个人信息的功能。难点在于页面繁多，相关前端页面多达17个。且具有不同的逻辑判断跳转，费时费力。',
        ]}
      />
    </div>
  )
}

export default WalletProjects
