import SingleProject from 'src/components/SingleProject'
import './index.css'

const WalletProjects = () => {
  return (
    <div className='wallet-project-content'>
      <div>
        <div className='wallet-project-title'>产品化钱包</div>
        {[
          '产品化钱包是钱包科技团队对外销售的主要产品。Lazada、Kakaopay、Vodapay、DanaPay均为产品化钱包的落地成果。',
          '产品化钱包分为iOS版和安卓版，为hybrid应用，由H5统一进行业务开发。',
          '入职蚂蚁期间，我参与产品化钱包的开发。具有代表性的业务有：大转盘、折扣券、KYC等。',
        ].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='wallet-project-list'>
        <SingleProject
          title={'大转盘'}
          desc={['钱包APP的大转盘抽奖功能。', '通过旋转的转盘随机抽取奖品。']}
          width={'220px'}
        />
        <SingleProject
          title={'折扣券'}
          desc={['钱包APP的折扣券功能', '用户使用折扣券来抵扣订单金额。']}
          width={'230px'}
        />
        <SingleProject
          title={'KYC'}
          desc={[
            '钱包APP的个人信息功能',
            '用户填写个人信息从而使用钱包的更多功能。',
          ]}
          width={'280px'}
        />
      </div>
    </div>
  )
}

export default WalletProjects
