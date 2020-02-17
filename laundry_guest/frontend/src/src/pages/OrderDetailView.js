import React from 'react';
import styles from '../components/OrderDetailView/OrderDetailView.scss';
import className from 'classnames/bind';
import Header from '../components/Common/Header';
import Menu from '../components/OrderDetailView/ItemSort';
import Orderinfo from'../components/OrderDetailView/Orderinfo'
import Orderinfotail from'../components/OrderDetailView/Orderinfo_tail'
import Laundry from '../components/OrderDetailView/OrderDetail';
import { Link } from "react-router-dom";


const cx = className.bind(styles);


const orderDetail =
    {
        id:1,
        name: '크린토피아 판교점',
        item: '와이샤스 외 1개',
        day: '2020년 1월 6일 오후 3:59',
        num: 'B0KG07MAHEG',
        money:'170,000원',
        moneymethod:'신용/체크카드',
        startaddress:'경기도 성남시 판교동271-6',
        endaddress:'경기도 성남시 판교동271-6',
    };


const itemData=[
{
id:1,
name: '와이샤스',
value: '20',
type: '물세탁',
requirement:'오늘은 조금 늦게 배달해주세요^^',
price:'3,4000'
},
{
id:1,
name: '청바지',
value: '20',
type: '드라이',
requirement:'오늘은 조금 늦게 배달해주세요^^',
price:'3,4000'
},
{
id:1,
name: '밍크코트',
value: '20',
type: '엄청 고급진 럭셔리 세탁',
requirement:'오늘은 조금 늦게 배달해주세요^^',
price:'3,4000'
},
{
id:1,
name: '와이샤스',
value: '20',
type: '물세탁',
requirement:'오늘은 조금 늦게 배달해주세요^^',
price:'3,4000'
}
]

class OrderDetailView extends React.Component {


  render() {
    const { match } = this.props;

    const orderinfoComponent = orderDetail

    const leftComponent = itemData.map(({ id, name, value, type, requirement, price}) => {
      return (
        <Laundry
          className={cx('order-item')}
          key={id}
          id={id}
          name={name}
          value={value}
          type={type}
          requirement={requirement}
          price={price}
        />
      )
    })




    const handleMain = () => {
      window.location.href = '/';
    }

    return (
      <div className={cx('order-list-page')} >
        <Header name={"주문 상세"} handle={handleMain} />
        <Orderinfo
        id= {orderinfoComponent.id}
        name= {orderinfoComponent.name}
        item= {orderinfoComponent.item}
        day= {orderinfoComponent.day}
        num= {orderinfoComponent.num}
        />
        <Menu
          leftComponent={leftComponent}
        >
        </Menu>
        <Orderinfotail
        money= {orderinfoComponent.money}
        moneymethod= {orderinfoComponent.moneymethod}
        startaddress= {orderinfoComponent.startaddress}
        endaddress= {orderinfoComponent.endaddress}
        />
      </div>
    )
  }
}

export default OrderDetailView;